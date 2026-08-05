"use client";

import { ChevronDown } from "lucide-react";

export function HeroScroll({
  targetId = "story",
  label = "Explore",
}) {
  const handleClick = () => {
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Scroll to ${label}`}
  className="
    group
    flex
    flex-col
    items-center
    gap-3
    text-brand-gold
  "
    >
  <span
    className="
      flex
      h-14
      w-8
      items-start
      justify-center
      rounded-full
      border
      border-brand-gold/50
      pt-2
    "
  >
    <ChevronDown className="size-4 animate-bounce" />
  </span>
    </button>
  );
}