"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "dynamic"
  | "danger-outline"
  | "link";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  wide?: boolean;
  href?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  wide = false,
  href,
  className,
  ...props
}: Props) {
  const base =
    "outline-none cursor-pointer flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 rounded-lg tracking-normal text-center fill-current m-1";

  const variantStyles: Record<Variant, string> = {
    // Primary Button (contrast surface)
    primary: "bg-inverted text-elevated",

    // Secondary Button (card surface)
    secondary: "bg-elevated text-text",

    // Dangerous Button
    danger: "bg-danger text-white",

    // Outline Button
    outline: "border border-border transparent text-text",

    // Dangerous Outline Button
    "danger-outline": "border border-danger bg-transparent text-danger-text",

    // dynamic Button
    dynamic:
      "bg-elevated border border-border hover:border-accent active:translate-x-[1px] active:translate-y-[4px]",

    // Link Button
    link: "bg-transparent text-text",
  };

  const wideStyles = wide ? "h-[38px] px-12 py-3 rounded-xl" : "";

  const styles = clsx(base, variantStyles[variant], wideStyles, className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
