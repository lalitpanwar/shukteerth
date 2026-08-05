import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      {/* Background Image */}
      <Image
        src="/images/hero/hero-desktop.webp"
        alt="Shukteerth Ashram"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Warm Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-black/40" />

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.45)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,120,.12),transparent_55%)]" />
    </>
  );
}