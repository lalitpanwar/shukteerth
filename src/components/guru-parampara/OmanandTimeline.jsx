import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { omanandTimeline } from "@/data/omanandJi.data";

export function OmanandTimeline() {
  return (
    <Section className="bg-brand-ivory py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ सेवा-यात्रा ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            पीठाधीश्वर के रूप में दो दशक
          </h2>
        </div>

        <ol className="mx-auto max-w-3xl">
          {omanandTimeline.map((item, index) => (
            <li key={item.title} className="relative pb-12 pl-10 last:pb-0">
              {index !== omanandTimeline.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-3 h-full w-px bg-brand-gold/25"
                />
              )}

              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-ivory"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              </span>

              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">
                {item.year}
              </span>

              <h3 className="mt-2 font-heading text-2xl text-brand-brown">
                {item.title}
              </h3>

              <p className="mt-3 leading-8 text-brand-brown/75">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
