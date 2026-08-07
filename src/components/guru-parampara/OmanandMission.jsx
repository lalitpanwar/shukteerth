import { GraduationCap, Sprout, BookOpen } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { omanandPillars } from "@/data/omanandJi.data";

const icons = {
  GraduationCap,
  Sprout,
  BookOpen,
};

export function OmanandMission() {
  return (
    <Section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ सामाजिक सेवा-कार्य ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            गुरु परम्परा को नई दिशा
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            स्वामी ओमानन्द जी महाराज ने अपने गुरु की सेवा-परम्परा को
            आगे बढ़ाते हुए निर्धन एवं सामाजिक रूप से वंचित वर्गों के
            लिए अनेक नई शिक्षण संस्थाओं की स्थापना की है, साथ ही
            पर्यावरण संरक्षण एवं धार्मिक अनुष्ठानों की निरंतरता को भी
            समान महत्व दिया है।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {omanandPillars.map((pillar) => {
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
