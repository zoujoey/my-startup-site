// src/components/NavLink.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:underline ${
        isActive ? "underline underline-offset-4 text-yellow-400" : ""
      }`}
    >
      {label}
    </Link>
  );
}
