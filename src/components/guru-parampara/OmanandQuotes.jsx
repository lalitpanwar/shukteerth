import { Quote } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { omanandQuotes } from "@/data/omanandJi.data";

export function OmanandQuotes() {
  return (
    <Section className="relative overflow-hidden bg-brand-ivory py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ उनके शब्दों में ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            सार्वजनिक सम्बोधनों से
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {omanandQuotes.map((item) => (
            <div
              key={item.quote}
              className="flex flex-col rounded-3xl border border-brand-gold/15 bg-white p-8 shadow-sm"
            >
              <Quote className="h-6 w-6 text-brand-gold/60" />
              <p className="mt-5 flex-1 font-heading text-xl leading-relaxed text-brand-brown">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm text-brand-brown/60">
                — {item.context}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
