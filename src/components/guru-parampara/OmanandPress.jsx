import Link from "next/link";
import { ExternalLink, Newspaper } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { omanandPress } from "@/data/omanandPress.data";

export function OmanandPress() {
  return (
    <Section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ मीडिया में ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            समाचार-पत्रों की नज़र से
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-brown/75">
            आश्रम के वार्षिक आयोजनों एवं सार्वजनिक सम्बोधनों पर प्रकाशित
            कुछ समाचार रिपोर्टें।
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {omanandPress.map((item) => (
            <article
              key={item.url}
              className="flex flex-col rounded-3xl border border-brand-gold/15 bg-brand-sand/20 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/10">
                <Newspaper className="h-6 w-6 text-brand-primary" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
                {item.source} • {item.date}
              </p>

              <h3 className="mt-3 font-heading text-xl leading-snug text-brand-brown">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-brand-brown/70">
                {item.excerpt}
              </p>

              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-gold"
              >
                पूरा समाचार पढ़ें
                <ExternalLink className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
