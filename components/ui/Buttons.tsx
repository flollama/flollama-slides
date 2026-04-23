"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "google"
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
  // EXACT brick-by-brick styles per variant
  const variantStyles = {
    primary:
      "border-none outline-none cursor-pointer flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 bg-primary rounded-lg tracking-normal text-center text-secondary fill-current m-1",

    secondary:
      "border-none outline-none cursor-pointer flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 bg-secondary rounded-lg text-center text-text fill-current m-1",

    danger:
      "border-none outline-none cursor-pointer flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 bg-dangerous rounded-lg tracking-normal text-center text-white fill-current m-1",

    outline:
      "border border-stroke cursor-pointer flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 bg-transparent rounded-lg text-center text-text fill-current m-1",

    "danger-outline":
      "border border-dangerous cursor-pointer flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 bg-transparent rounded-lg text-center text-dangerous-text fill-current m-1",

    google:
      "flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 bg-secondary border border-stroke rounded-lg cursor-pointer hover:border-accent active:translate-x-[1px] active:translate-y-[4px]",

    link:
      "border-none outline-none cursor-pointer flex flex-row justify-center items-center gap-2 w-auto h-auto px-6 py-2 bg-transparent tracking-normal text-center text-text fill-current",
  };

  const wideStyles = wide ? "h-[38px] px-12 py-3 rounded-xl" : "";

  const baseStyles = clsx(variantStyles[variant], wideStyles, className);

  // LINK MODE
  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  // BUTTON MODE
  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}