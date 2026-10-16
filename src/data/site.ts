export const site = {
  name: "Crazytivity Art Stu",
  shortName: "Crazytivity",
  tagline: "Art. Emotion. Imagination.",
  description:
    "Contemporary art and original paintings by Crazytivity Art Stu. Bold, emotional, distinctive works available for purchase and commission.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://crazytivityart.studio",
  email: "wiselyciprian@gmail.com ",
  phone: "",
  location: "Studio by appointment",
  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    pinterest: "",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Art", href: "/art" },
    { label: "Collections", href: "/collections" },
    { label: "Commissions", href: "/commissions" },
    { label: "Available Art", href: "/available" },
    { label: "Contact", href: "/contact" },
  ],
} as const;