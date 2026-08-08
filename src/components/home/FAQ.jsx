import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { faqs } from "@/data/faq.data";

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section id="faq" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="max-w-3xl">
        <div className="mx-auto mb-14 text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ प्रश्नोत्तर ✦
          </span>

          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-brown/75">
            आश्रम दर्शन एवं यात्रा से जुड़े कुछ सामान्य प्रश्नों के उत्तर।
          </p>
        </div>

        <Accordion >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b border-brand-border last:border-b-0"
            >
              <AccordionTrigger className="py-6 font-heading text-lg text-brand-brown hover:no-underline md:text-xl">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-base leading-8 text-brand-brown/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
