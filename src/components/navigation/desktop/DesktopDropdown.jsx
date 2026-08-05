"use client";

import Link from "next/link";

export function DesktopDropdown({ items }) {
  return (
    <div
      className="
        invisible
        absolute
        left-0
        top-full
        mt-3
        min-w-64
        rounded-2xl
        border
        border-brand-border
        bg-brand-ivory
        p-2
        opacity-0
        shadow-xl
        transition-all
        duration-200
        translate-y-2
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      {items.map((child) => (
        <Link
          key={child.key}
          href={child.href}
          className="
            block
            rounded-xl
            px-4
            py-3
            text-sm
            text-brand-brown
            transition-colors
            hover:bg-brand-sand
            hover:text-brand-maroon
          "
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}