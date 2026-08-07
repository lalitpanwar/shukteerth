import { GraduationCap, HeartHandshake, Scale } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { kalyanDevPillars } from "@/data/kalyanDev.data";

const icons = {
  GraduationCap,
  HeartHandshake,
  Scale,
};

export function KalyanDevMission() {
  return (
    <Section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ जीवन-व्रत ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            &lsquo;शिक्षा ऋषि&rsquo; का संकल्प
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            &lsquo;शिक्षा ऋषि&rsquo; के नाम से विख्यात स्वामी कल्याण देव जी
            ने ग्रामीण एवं वंचित समाज के उत्थान के लिए शिक्षा को अपना
            प्रमुख माध्यम बनाया। पश्चिमी उत्तर प्रदेश, उत्तराखंड, हरियाणा,
            हिमाचल प्रदेश, राजस्थान एवं पंजाब में उन्होंने विद्यालय,
            महाविद्यालय, संस्कृत पाठशालाएँ, तकनीकी संस्थान, कृषि केंद्र,
            गौशालाएँ एवं चिकित्सालय सहित लगभग 300 संस्थाओं की स्थापना की।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {kalyanDevPillars.map((pillar) => {
            const Icon = icons[pillar.icon];
            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-brand-gold/15 bg-brand-sand/20 p-8 transition-colors duration-300 hover:border-brand-gold/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/10">
                  <Icon className="h-7 w-7 text-brand-primary" />
                </div>
                <h3 className="mt-6 font-heading text-2xl text-brand-brown">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-7 text-brand-brown/70">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
