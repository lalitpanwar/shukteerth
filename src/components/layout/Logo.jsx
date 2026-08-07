import Link from "next/link";
import { Flower2 } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Shri Shukdev Ashram"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-saffron transition-transform duration-300 group-hover:scale-105">
        <Flower2 className="size-6 text-white" />
      </div>

      <div>
        <p className="font-heading text-lg font-semibold text-brand-primary">
          Shri Shukdev Ashram
        </p>

        <p className="text-xs text-brand-brown">
          Shukteerth
        </p>
      </div>
    </Link>
  );
}
