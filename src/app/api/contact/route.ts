import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Validation schema the same rules as the frontend, enforced on the server.
 */
const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(120),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  inquiry: z.enum(["General", "Commission", "Purchase"]),
  message: z.string().trim().min(10, "Message is too short").max(5000),
  company: z.string().max(0, "Spam detected"), // honeypot: must be empty
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid submission",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, inquiry, message } = parsed.data;

    // ─────────────────────────────────────────────────────────
    // 📬 In development: log to terminal
    // 📬 In production: connect an email provider (see DEPLOYMENT.md)
    // ─────────────────────────────────────────────────────────
    console.log("─── New contact submission ───────────────────");
    console.log("Name:    ", name);
    console.log("Email:   ", email);
    console.log("Phone:   ", phone || "(none)");
    console.log("Inquiry: ", inquiry);
    console.log("Message: ", message);
    console.log("──────────────────────────────────────────────");

    // If RESEND_API_KEY is set, forward via Resend.
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (apiKey && to && from) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: email,
          subject: `[Crazytivity] New ${inquiry} inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${
            phone || "—"
          }\nInquiry: ${inquiry}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error("Resend failed:", body);
        // We still return success to the user the message is logged above.
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}