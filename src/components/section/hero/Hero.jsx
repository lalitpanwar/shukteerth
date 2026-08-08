import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/custom";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { HeroOrnament } from "./HeroOrnament";

export default function Hero() {
  return (
    <Section className="relative min-h-[100svh] overflow-hidden boder-0" size="sm">
      {/* Background Image */}
      {/* Reused from VisitShukteerth/Footer — bright daytime shot, so the
          overlays below are intentionally heavier than a typical hero. */}
      <Image
        src="/images/home/shri-shukdev-ashram-muzaffarnagar.webp"
        alt="श्री शुकदेव आश्रम, शुकतीर्थ"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Base darkening */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      {/* Brand tint */}
      <div className="pointer-events-none absolute inset-0 bg-brand-primary/55" />
      {/* Extra scrim focused where the text sits */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_48%,rgba(0,0,0,0.55),transparent_100%)]" />
      {/* Golden Glow */}
      <div className="pointer-events-none absolute left-[8%] top-[52%] h-96 w-96 rounded-full bg-brand-gold/20 blur-[140px]" />
      {/* Content */}
      <Container className="relative z-10 flex h-full items-center justify-center py-24">
        <div className="max-w-5xl pb-16 text-center md:pb-24">
          {/* Ornament */}

   

          {/* Badge */}

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-gold"></span>

            <span className="font-heading text-sm uppercase tracking-[0.18em] text-brand-gold [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
              पावन शुकतीर्थ
            </span>

            <span className="h-px w-10 bg-brand-gold"></span>
          </div>

          {/* Heading */}

          <h1 className="font-heading text-[clamp(1.875rem,1.2rem_+_3.5vw,3.75rem)] leading-[1.2] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            जहाँ श्रीमद्भागवत महापुराण की
            <br />
            दिव्य कथा का अमर प्रवाह प्रारम्भ हुआ।
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] md:text-lg md:leading-8">
            पाँच हजार वर्षों से अधिक समय से यह दिव्य भूमि श्रद्धा, ज्ञान, तप और
            सनातन संस्कृति की अमूल्य धरोहर रही है। श्री शुकदेव मुनि की वाणी से
            पावन हुई यह भूमि आज भी लाखों श्रद्धालुओं की आस्था का केन्द्र है।
          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <ButtonLink href="/shukteerth" endIcon={<ArrowRight className="h-4 w-4" />}>
              शुकतीर्थ जानें
            </ButtonLink>

            <ButtonLink
              href="/contact"
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-brand-brown"
              endIcon={<ArrowRight className="h-4 w-4" />}
            >
              भागवत कथा हेतु संपर्क करें
            </ButtonLink>
          </div>

        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="mb-3 h-10 w-px bg-brand-gold/70"></span>

          <div className="motion-safe:animate-bounce flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/50 text-brand-gold">
            ↓
          </div>

          <span className="mt-3 text-xs uppercase tracking-[0.2em] text-white/70">
            Scroll
          </span>
        </div>
      </div>

      {/* Bottom curve with lotus */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg
          className="block w-full text-brand-ivory"
          viewBox="0 0 1120 60"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C 300,60 820,60 1120,0 L1120,60 L0,60 Z"   fill="var(--brand-sand-soft)" />
        </svg>
      </div> */}


    </Section>
  );
}
