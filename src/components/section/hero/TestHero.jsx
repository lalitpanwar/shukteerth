import { ButtonLink } from "@/components/ui/custom";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TestHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero/hero-desktop.jpg"
        alt="Sunset over a sacred river"
        fill
        priority
        className="object-cover"
      />

      {/* Readability overlay: darkens top/bottom, keeps middle warm */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-maroon/70 via-black/25 to-brand-maroon/80" />

      {/* Sun glow accent (kept so the light source still pops through the photo) */}
      <div className="absolute left-[6%] top-[58%] h-40 w-40 animate-pulse rounded-full bg-brand-gold/30 blur-3xl md:h-56 md:w-56" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-24 text-center md:pb-24 md:pt-28">
        <div className="mb-5 flex items-center gap-3">
<span className="h-px w-10 bg-brand-gold/70" />

<span className="text-lg text-brand-gold">❁</span>

<span className="h-px w-10 bg-brand-gold/70" />
        </div>

<p className="font-devanagari mb-4 text-lg font-medium tracking-[0.25em] uppercase text-brand-gold md:text-xl">
  श्री शुकदेव आश्रम • शुकतीर्थ
</p>

       <h1 className="font-devanagari max-w-3xl  leading-snug text-white sm:text-4xl md:text-5xl md:leading-[1.3]">
          जहाँ श्रीमद्भागवत महापुराण की
          <br className="hidden sm:block" />
          अमर कथा का दिव्य प्रवाह प्रारम्भ हुआ।
        </h1>

        <div className="my-7 flex items-center gap-3">
<span className="h-px w-10 bg-brand-gold/70" />

<span className="text-lg text-brand-gold">❁</span>

<span className="h-px w-10 bg-brand-gold/70" />
        </div>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
<ButtonLink
  href="/about-shukteerth"

  endIcon={<ArrowRight className="h-5 w-5" />}
>
  शुकतीर्थ जानें 
</ButtonLink>
<ButtonLink
  href="/book-bhagwat-katha"
  variant="outline"
  endIcon={<ArrowRight className="h-5 w-5" />}
>
  भागवत कथा बुक करें
</ButtonLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center pb-10 text-brand-gold">
        <span className="mb-2 h-10 w-px bg-[#e8c880]/60" />
        <div className="mb-2 flex h-9 w-9 animate-bounce items-center justify-center rounded-full border border-[#e8c880]/70 text-sm">
          ↓
        </div>
        <p className="text-xs tracking-wide">Scroll to Explore</p>
      </div>

      {/* Bottom curve with lotus */}
      <div className="relative">
        <svg
          className="block w-full translate-y-px"
          viewBox="0 0 1120 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C 300,60 820,60 1120,0 L1120,60 L0,60 Z"
            fill="#fff"
          />
        </svg>
        <span
          className="absolute -top-1 left-1/2 -translate-x-1/2 text-2xl text-[#d8a94f]"
          aria-hidden="true"
        >
          ❁
        </span>
      </div>
    </section>
  );
}