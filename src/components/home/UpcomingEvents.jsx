import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

const events = [
  {
    id: "kartik-purnima-2026",
    href: "/shukteerth",
    day: "24",
    month: "नवंबर",
    year: "2026",
    weekday: "मंगलवार",
    badge: "वार्षिक मेला",
    title: "कार्तिक पूर्णिमा मेला",
    description:
      "प्रतिवर्ष कार्तिक पूर्णिमा को यहाँ हज़ारों श्रद्धालु पवित्र गंगा स्नान हेतु एकत्रित होते हैं — शुकतीर्थ के वार्षिक कैलेंडर का सबसे बड़ा पर्व।",
  },
];

const ongoing = {
  href: "/about-ashram",
  badge: "सतत आयोजन",
  title: "श्रीमद्भागवत कथा एवं सत्संग",
  description:
    "आश्रम में श्रीमद्भागवत कथा एवं सत्संग का क्रम निरंतर चलता रहता है — जानकारी एवं तिथियों हेतु सम्पर्क करें।",
};

export default function UpcomingEvents() {
  return (
    <Section className="bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ आगामी पर्व एवं आयोजन ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            शुकतीर्थ का वार्षिक कैलेंडर
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-brown/75">
            प्रमुख वार्षिक पर्व एवं आश्रम की नियमित आध्यात्मिक गतिविधियाँ।
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="group flex gap-5 rounded-2xl border border-brand-gold/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-lg"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-primary text-white">
                <span className="font-heading text-2xl leading-none">
                  {event.day}
                </span>
                <span className="mt-1 text-[11px] tracking-wide">
                  {event.month} {event.year}
                </span>
              </div>

              <div>
                <span className="inline-flex rounded-full border border-brand-gold/30 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-brand-primary uppercase">
                  {event.badge}
                </span>
                <h3 className="mt-2 font-heading text-lg text-brand-brown">
                  {event.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-brand-brown/70">
                  {event.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
                  शुकतीर्थ पर विस्तार से जानें
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}

          <Link
            href={ongoing.href}
            className="group flex gap-5 rounded-2xl border border-brand-gold/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-lg"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15">
              <BookOpenText className="h-8 w-8 text-brand-primary" />
            </div>

            <div>
              <span className="inline-flex rounded-full border border-brand-gold/30 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-brand-primary uppercase">
                {ongoing.badge}
              </span>
              <h3 className="mt-2 font-heading text-lg text-brand-brown">
                {ongoing.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-brand-brown/70">
                {ongoing.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
                आश्रम के बारे में जानें
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
