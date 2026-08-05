"use client";

import Link from "next/link";

import { Megaphone } from "lucide-react";

import Container from "../shared/container";

export function AnnouncementBar({
  text ="श्रीमद्भागवत कथा • 10–17 अगस्त • ऑनलाइन पंजीकरण प्रारम्भ",
  href = "#",
}) {
  if (!text) return null;

  return (
    <div className="bg-brand-primary text-brand-gold-light">
      <Container>
        <Link
          href={href}
          className="
            flex
            h-10
            items-center
            justify-center
            gap-2
            text-sm
            font-medium
            transition-opacity
            hover:opacity-90
          "
        >
          <Megaphone className="size-4 shrink-0" />

          <span className="truncate">
            {text}
          </span>
        </Link>
      </Container>
    </div>
  );
}