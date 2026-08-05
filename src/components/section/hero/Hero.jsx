import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/custom";
import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

export default function Hero() {
  return (
    <Section className="relative  h-screen overflow-hidden" size="sm">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-desktop.jpg"
        alt="श्री शुकतीर्थ"
        fill
        priority
        className="object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-brand-primary/45" />
      {/* Golden Glow */}
      <div className="absolute left-[8%] top-[52%] h-72 w-72 rounded-full bg-brand-gold/15 blur-[120px]" />
      {/* Content pb-16 md:py-24*/}
      <Container className="relative z-10 flex h-full items-center justify-center py-32 md:py-24 ">
      
        <div className="max-w-5xl  pb-24 text-center">
          {/* Badge */}

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-gold"></span>

            <span className="font-heading text-sm uppercase tracking-[0.18em] text-brand-gold">
              पावन शुकतीर्थ
            </span>

            <span className="h-px w-10 bg-brand-gold"></span>
          </div>

          {/* Heading */}

          <h1 className="font-heading text-3xl leading-tight text-white md:text-6xl md:leading-[1.18]">
            जहाँ श्रीमद्भागवत महापुराण की 
            <br />दिव्य कथा का अमर प्रवाह प्रारम्भ हुआ।
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-sm md:text-lg leading-6 md:leading-8 text-white/85">
            पाँच हजार वर्षों से अधिक समय से यह दिव्य भूमि श्रद्धा, ज्ञान, तप और
            सनातन संस्कृति की अमूल्य धरोहर रही है। श्री शुकदेव मुनि की वाणी से
            पावन हुई यह भूमि आज भी लाखों श्रद्धालुओं की आस्था का केन्द्र है।
          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <ButtonLink
              href="/shukteerth"
              variant="default"
              endIcon={<ArrowRight />}
            >
              शुकतीर्थ जानें
            </ButtonLink>

            <ButtonLink
              href="/book-bhagwat-katha"
              variant="outline"
              endIcon={<ArrowRight />}
            >
              भागवत कथा बुक करें
            </ButtonLink>
          </div>
        </div>
      </Container>{" "}
      {/* <!-- container --> */}
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="mb-3 h-10 w-px bg-brand-gold/70"></span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/50 text-brand-gold animate-bounce">
            ↓
          </div>

          <span className="mt-3 text-xs uppercase tracking-[0.2em] text-white/70">
            Scroll
          </span>
        </div>
      </div>
            {/* Bottom curve with lotus */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="block w-full "
          viewBox="0 0 1120 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C 300,60 820,60 1120,0 L1120,60 L0,60 Z"
            fill="#fff"
          />
        </svg>

      </div>
    </Section>
    
  );
}
