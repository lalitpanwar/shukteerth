import Image from "next/image";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

const highlights = [
  "श्रीमद्भागवत कथा की पावन परम्परा",
  "परम पूज्य स्वामी कल्याण देव जी द्वारा स्थापित",
  "गुरु परम्परा द्वारा संरक्षित",
  "सेवा, साधना एवं संस्कृति का केन्द्र",
];

export default function AboutAshram() {
  return (
    <Section className="bg-white">

      <Container>

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">

            ✦ श्री शुकदेव आश्रम ✦

          </span>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">

            जहाँ सेवा, साधना और
            <br />
            सनातन संस्कृति आज भी जीवंत है।

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-brown/75">

            पाँच हजार वर्षों की दिव्य परम्परा से जुड़ा
            श्री शुकदेव आश्रम श्रद्धा, सेवा, साधना और
            संस्कार का जीवंत केन्द्र है। यहाँ आने वाला
            प्रत्येक श्रद्धालु केवल दर्शन ही नहीं,
            बल्कि आध्यात्मिक अनुभव भी प्राप्त करता है।

          </p>

        </div>

        {/* Image */}

        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl">

          <Image
            src="/images/about/about-ashram.jpg"
            alt="श्री शुकदेव आश्रम"
            width={1600}
            height={900}
            className="aspect-[16/9] w-full object-cover"
          />

        </div>

        {/* Divider */}

        <div className="my-14 flex items-center justify-center gap-4">

          <span className="h-px w-20 bg-brand-gold/40"></span>

          <span className="text-brand-gold">

            ✦

          </span>

          <span className="h-px w-20 bg-brand-gold/40"></span>

        </div>

        {/* Content */}

        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
                      {/* Left */}

          <div>

            <h3 className="font-heading text-3xl leading-tight text-brand-brown">

              एक जीवंत
              <br />
              आध्यात्मिक विरासत

            </h3>

            <p className="mt-8 text-lg leading-8 text-brand-brown/75">

              परम पूज्य <strong>स्वामी कल्याण देव जी महाराज</strong> द्वारा
              स्थापित श्री शुकदेव आश्रम केवल एक आश्रम नहीं,
              बल्कि सेवा, साधना, संस्कार और सनातन संस्कृति
              का जीवंत केन्द्र है।

            </p>

            <p className="mt-6 text-lg leading-8 text-brand-brown/75">

              यहाँ प्रतिदिन श्रीमद्भागवत कथा, गौ सेवा,
              गुरुकुल परम्परा, अन्नदान तथा विविध धार्मिक
              एवं सामाजिक गतिविधियों के माध्यम से भारतीय
              संस्कृति को जीवंत रखा जा रहा है।

            </p>

            <ButtonLink
              href="/about-ashram"
              variant="link"
              className="mt-10 p-0 h-auto"
            >
              आश्रम के बारे में जानें →
            </ButtonLink>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-brand-sand/40 p-8">

            <h4 className="font-heading text-2xl text-brand-brown">

              विरासत की विशेषताएँ

            </h4>

            <div className="mt-8 space-y-6">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <span className="mt-1 text-brand-gold">

                    ✦

                  </span>

                  <p className="leading-7 text-brand-brown/80">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}