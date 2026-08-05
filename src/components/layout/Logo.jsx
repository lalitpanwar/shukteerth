import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Shri Shukdev Ashram"
    >
      <div className="size-12 rounded-full bg-brand-saffron" />

      <div>
        <p className="font-heading text-lg font-semibold text-brand-maroon">
          Shri Shukdev Ashram
        </p>

        <p className="text-xs text-brand-brown">
          Shukteerth
        </p>
      </div>
    </Link>
  );
}