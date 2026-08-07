"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DesktopDropdown } from "./DesktopDropdown";

export function DesktopNavItem({ item, active }) {
  const hasChildren = item.children?.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-sand/60",
          active
            ? "text-brand-primary"
            : "text-brand-brown hover:text-brand-primary"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors group-hover:bg-brand-sand/60",
          active
            ? "text-brand-primary"
            : "text-brand-brown group-hover:text-brand-primary"
        )}
      >
        {item.label}

        <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      <DesktopDropdown items={item.children} />
    </div>
  );
}
