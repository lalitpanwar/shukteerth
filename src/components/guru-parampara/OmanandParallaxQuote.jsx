import { Quote } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

export function OmanandParallaxQuote() {
  return (
    <Section className="relative md:py-0 overflow-hidden p-0">
      <div
        className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center bg-fixed motion-reduce:bg-scroll"
        style={{
          backgroundImage: "url('/images/home/swami-omanand.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/85" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[140px]" />

        <Container className="relative z-10 max-w-3xl py-20 text-center">
          <Quote className="mx-auto h-10 w-10 text-brand-gold/70" />

          <p className="mt-6 font-heading text-2xl leading-relaxed text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] md:text-3xl">
            &ldquo;शुकदेव मुनि सम्पूर्ण मानव जाति के पथ प्रदर्शक हैं।&rdquo;
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-brand-gold [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
            — स्वामी ओमानन्द जी महाराज
          </p>
        </Container>
      </div>
    </Section>
  );
}
