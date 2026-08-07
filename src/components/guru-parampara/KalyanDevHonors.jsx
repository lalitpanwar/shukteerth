import { Award } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { kalyanDevHonors } from "@/data/kalyanDev.data";

export function KalyanDevHonors() {
  return (
    <Section className="relative overflow-hidden bg-brand-ivory py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ सम्मान एवं मान्यता ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            राष्ट्र की श्रद्धांजलि
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            उनकी सेवा-भावना से प्रेरित होकर देश के राष्ट्रपतियों एवं
            प्रधानमंत्रियों ने भी उनका आशीर्वाद लिया। भारत सरकार ने उनके
            जनसेवा कार्यों को इन सम्मानों से अभिनन्दित किया।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kalyanDevHonors.map((honor) => (
            <div
              key={honor.title}
              className="rounded-2xl border border-brand-gold/20 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10">
                <Award className="h-6 w-6 text-brand-primary" />
              </div>
              <p className="mt-4 text-sm font-semibold tracking-[0.15em] text-brand-gold">
                {honor.year}
              </p>
              <h3 className="mt-2 font-heading text-xl text-brand-brown">
                {honor.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-brown/70">
                {honor.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
