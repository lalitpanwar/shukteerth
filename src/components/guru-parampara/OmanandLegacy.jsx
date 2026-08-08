import { Flower2, ArrowRight } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

export function OmanandLegacy() {
  return (
    <Section className="relative overflow-hidden bg-brand-primary py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -right-40 h-[30rem] w-[30rem] rounded-full bg-brand-gold/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10">
            <Flower2 className="h-7 w-7 text-brand-gold" />
          </div>

          <h2 className="mt-8 font-heading text-3xl leading-tight md:text-4xl">
            एक अखंड परम्परा की जीवंत धारा
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            परम पूज्य स्वामी ओमानन्द जी महाराज के नेतृत्व में श्री
            शुकदेव आश्रम, शुकतीर्थ आज भी शिक्षा, सेवा एवं सनातन
            संस्कृति के संरक्षण हेतु अपने संस्थापक स्वामी कल्याण देव
            जी महाराज के स्वप्न को साकार कर रहा है।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <ButtonLink
              href="/guru-parampara/swami-kalyan-dev"
              variant="gold"
              endIcon={<ArrowRight />}
            >
              स्वामी कल्याण देव जी के बारे में जानें
            </ButtonLink>

            <ButtonLink href="/about-ashram" variant="outline" endIcon={<ArrowRight />}>
              आश्रम के बारे में
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
