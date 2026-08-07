import Image from "next/image";
import { Flower2 } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

export function OmanandHero() {
  return (
    <Section className="relative flex min-h-[78vh] items-end overflow-hidden p-0 lg:min-h-[85vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/shri-shukdev-ashram-muzaffarnagar.webp"
          alt="श्री शुकदेव आश्रम, शुकतीर्थ"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/70 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_78%,rgba(0,0,0,0.8),transparent_100%)]" />
      </div>

      {/* Golden Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[140px]" />

      {/* Content */}
      <Container className="relative z-10 pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/40 px-5 py-2.5 backdrop-blur-md">
            <Flower2 className="h-4 w-4 text-brand-gold" />
            <span className="text-sm uppercase tracking-[0.2em] text-white">
              वर्तमान पीठाधीश्वर • श्री शुकदेव आश्रम
            </span>
          </div>

          <h1 className="mt-8 font-heading text-5xl leading-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.65)] md:text-7xl">
            पूज्य स्वामी ओमानन्द जी महाराज
          </h1>

          <p className="mt-5 text-lg tracking-[0.3em] text-brand-gold uppercase [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
            पीठाधीश्वर • 2004 — वर्तमान
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
            ब्रह्मलीन स्वामी कल्याण देव जी महाराज के प्रमुख शिष्य एवं
            उत्तराधिकारी, जो 2004 से श्री शुकदेव आश्रम, शुकतीर्थ में
            शिक्षा, सेवा एवं सनातन परम्परा की अखंड ज्योति को आगे बढ़ा
            रहे हैं।
          </p>
        </div>
      </Container>
    </Section>
  );
}
