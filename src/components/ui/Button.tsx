import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-widest2 transition-all duration-500 will-change-transform";

const variants: Record<Variant, string> = {
  primary: "bg-ivory text-ink hover:bg-terracotta hover:text-ivory",
  outline:
    "border border-ivory/25 text-ivory hover:border-terracotta hover:text-terracotta",
  ghost: "text-ivory hover:text-terracotta",
};

function Content({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="relative z-10 inline-block h-1 w-1 rounded-full bg-current transition-transform duration-500 group-hover:translate-x-1"
      />
    </>
  );
}

export function Button(props: NativeButtonProps) {
  const { children, variant = "primary", className, type = "button", onClick, disabled } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], disabled && "opacity-50", className)}
    >
      <Content>{children}</Content>
    </button>
  );
}

export function ButtonLink(props: LinkProps) {
  const { children, variant = "primary", className, href, external } = props;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        <Content>{children}</Content>
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <Content>{children}</Content>
    </Link>
  );
}