"use client";

import { usePathname } from "next/navigation";

import { NAVIGATION } from "@/config/navigation";
import { DesktopNavItem } from "./DesktopNavItem";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden min-w-0 lg:flex justify-center"
    >
      <ul className="flex items-center justify-center gap-1">
        {NAVIGATION.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.key}>
              <DesktopNavItem
                item={item}
                active={active}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}