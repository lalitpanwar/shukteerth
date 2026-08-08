import { Quote, Landmark } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { testimonials } from "@/data/testimonials.data";

export default function Testimonials() {
  return (
    <Section className="border-y border-brand-border/60 bg-brand-sand/20 py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase">
            ✦ सम्मान एवं आशीर्वचन ✦
          </span>
          <h2 className="mt-3 font-heading text-3xl text-brand-brown md:text-4xl">
            गणमान्य अतिथियों की अभिव्यक्ति
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-brown/70">
            श्री शुकदेव आश्रम एवं गुरु परम्परा के विषय में समय-समय पर
            आश्रम में पधारे गणमान्य अतिथियों के कथन।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-3xl border border-brand-gold/15 bg-white p-8 shadow-sm"
            >
              <Quote className="h-6 w-6 text-brand-gold/60" />

              <p className="mt-5 flex-1 text-base italic leading-relaxed text-brand-brown/80">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-brand-gold/15 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                  <Landmark className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-heading text-sm text-brand-brown">
                    {item.name}
                  </p>
                  <p className="text-xs text-brand-brown/60">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
