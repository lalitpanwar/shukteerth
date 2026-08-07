"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  Menu } from "lucide-react";

import { NAVIGATION } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function formatNavigationLabel(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-xl"
            aria-label="Open navigation menu"
          >
            
            <Menu className="size-6" />
          </Button>
        }
      />

      <SheetContent
        side="right"
        className="w-(--mobile-sheet-width) max-w-[90vw] border-l border-brand-border bg-brand-ivory p-0 shadow-2xl"
      >
        <SheetHeader className="border-b border-brand-border px-6 py-5">
          <SheetTitle className="text-left">
            <span className="block text-lg font-semibold text-brand-primary">
              Shri Shukdev Ashram
            </span>
            <span className="mt-1 block text-xs text-brand-brown/70">
              Shukteerth • Muzaffarnagar
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile navigation">
          <Accordion multiple className="gap-1">
            {NAVIGATION.map((item) => {
              const label = formatNavigationLabel(item.key);
              const hasChildren = item.children?.length > 0;
              const isActive = pathname === item.href;
              const hasActiveChild = item.children?.some(
                (child) => pathname === child.href
              );

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-brand-sand/60 ${
                      isActive
                        ? "bg-brand-sand text-brand-primary"
                        : "text-brand-brown"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <AccordionItem key={item.href} value={item.key} className="border-0">
                  <AccordionTrigger
                    className={`rounded-lg px-3 py-2.5 hover:bg-brand-sand/60 hover:no-underline ${
                      isActive || hasActiveChild
                        ? "bg-brand-sand text-brand-primary"
                        : "text-brand-brown"
                    }`}
                  >
                     {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    <div className="ml-3 flex flex-col border-l border-brand-border pl-3">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`rounded-md px-3 py-2 text-sm transition hover:bg-brand-sand/60 hover:text-brand-brown ${
                          isActive
                            ? "bg-brand-sand text-brand-primary"
                            : "text-brand-brown/75"
                        }`}
                      >
                         {item.label} Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className={`rounded-md px-3 py-2 text-sm transition hover:bg-brand-sand/60 hover:text-brand-brown ${
                            pathname === child.href
                              ? "bg-brand-sand text-brand-primary"
                              : "text-brand-brown/75"
                          }`}
                        >
                          {formatNavigationLabel(child.label)}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
