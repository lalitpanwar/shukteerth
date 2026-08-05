import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

export default function StoryHeader() {
  return (
    <Section className="bg-brand-ivory">
      <Container className="max-w-4xl py-24 text-center">

        {/* Decorative Divider */}

        <div className="mb-8 flex items-center justify-center gap-4">

          <span className="h-px w-16 bg-brand-gold/50"></span>

          <span className="text-2xl text-brand-gold">
            ❁
          </span>

          <span className="h-px w-16 bg-brand-gold/50"></span>

        </div>

        {/* Badge */}

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-brand-primary">
          शुकतीर्थ की दिव्य यात्रा
        </p>

        {/* Heading */}

        <h2 className="font-heading text-3xl leading-tight text-brand-brown md:text-5xl md:leading-[1.2]">
          जहाँ समय ठहर जाता है
          <br />
          और श्रद्धा का इतिहास जीवंत हो उठता है।
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-brown/75">
          यह केवल एक तीर्थ नहीं, बल्कि सनातन संस्कृति, ज्ञान,
          भक्ति और वैराग्य की वह पावन भूमि है जहाँ से
          श्रीमद्भागवत महापुराण का दिव्य संदेश सम्पूर्ण मानवता तक पहुँचा।
        </p>

      </Container>
    </Section>
  );
}