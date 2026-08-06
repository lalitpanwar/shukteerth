import Image from "next/image";
import { ArrowRight, Flower2, Landmark, Quote } from "lucide-react";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { ButtonLink } from "@/components/ui/custom";

export default function GuruParampara() {
  return (
    <Section className="relative overflow-hidden bg-brand-ivory py-20 md:py-24 xl:py-28">

      <Container>

        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">

            ✦  गुरु परम्परा ✦

          </span>


          <h2
            className="
              mt-5
              font-heading
              text-4xl
              leading-[1.15]
              text-brand-brown
              sm:text-5xl
              xl:text-[58px]
            "
          >

            <span className="block">
              एक गुरु...
            </span>

            <span className="mt-2 block">
              एक आशीर्वाद...
            </span>

            <span className="mt-2 block text-brand-primary">
              एक अखंड परम्परा।
            </span>

          </h2>

        </div>

        {/* =======================================================
            CONTENT
        ======================================================== */}

        <div
          className="
grid
lg:grid-cols-2
items-center
gap-10
md:gap-12
lg:gap-14
xl:gap-16
          "
        >

          {/* ===================================================
              LEFT IMAGE
          ==================================================== */}

          <div className="flex justify-center lg:justify-start">

            <div className="w-full ">

              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-brand-gold/20
                  
                  p-3
                "
              >

                <Image
                  src="/images/home/guru-parampara.webp"
                  alt="Swami Kalyan Dev Ji and Swami Omanand Ji"
                  width={900}
                  height={1200}
                  className="
                    aspect-[4/5]
                    w-full
                    rounded-[26px]
                    object-cover
                    
                  "
                />

              </div>

              {/* Caption */}

              <div className="mt-4 text-center">

                <h3
                  className="
                    font-heading
                    text-sm
                    leading-6
                    text-brand-brown
                  "
                >

                  ब्रह्मलीन स्वामी कल्याण देव जी

                  <span className="mx-2 text-brand-gold">
                    ✦
                  </span>

                  स्वामी ओमानन्द जी महाराज

                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    tracking-wide
                    text-brand-brown/60
                  "
                >
                  संस्थापक एवं वर्तमान पीठाधीश्वर
                </p>

              </div>

            </div>

          </div>

          {/* ===================================================
              RIGHT CONTENT
          ==================================================== */}

          <div className="w-full max-w-[540px]">

            {/* Quote */}

            <div
              className="
                mb-12
                border-l-2
                border-brand-gold/20
                pl-6
              "
            >

              <Quote className="mb-4 h-5 w-5 text-brand-gold/60" />

              <p
                className="
                  font-heading
                  text-2xl
                  leading-relaxed
                  text-brand-brown
                "
              >

                सनातन धर्म की श्रेष्ठ  

                <br />

                गुरु-शिष्य परंपरा 
                की प्रतिमूर्ति

              </p>

            </div>

            {/* Founder & Current yahan se next part me start hoga */}
                        <div className="space-y-12">

              {/* ===========================
                  Founder
              ============================ */}

{/* Founder */}

<div className="flex gap-5">

  {/* Icon */}

  <div className="mt-[52px] shrink-0">

    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-brand-gold/20
        bg-brand-sand/20
      "
    >
      <Landmark className="h-6 w-6 text-brand-primary" />
    </div>

  </div>

  {/* Content */}

  <div className="flex-1">

    <span
      className="
        inline-flex
        rounded-full
        border
        border-brand-gold/25
        px-3
        py-1
        text-[11px]
        font-semibold
        tracking-[0.18em]
        text-brand-primary
      "
    >
      संस्थापक
    </span>

    <h3
      className="
        mt-4
        font-heading
        text-3xl
        leading-tight
        text-brand-brown
      "
    >
      ब्रह्मलीन स्वामी कल्याण देव जी
    </h3>

    <p className="mt-2 text-sm tracking-wide text-brand-brown/60">
      सेवा काल • 1969 – 2004
    </p>

    <p className="mt-5 max-w-md text-base leading-8 text-brand-brown/70">
      श्री शुकदेव आश्रम की स्थापना कर सेवा, साधना एवं
      सनातन संस्कृति की दिव्य परम्परा का शुभारम्भ किया।
    </p>

  </div>

</div>

              {/* Divider */}

              <div className="flex items-center gap-5">

                <span className="h-px flex-1 bg-brand-gold/20" />

                <span className="text-brand-gold text-sm">
                  ✦
                </span>

                <span className="h-px flex-1 bg-brand-gold/20" />

              </div>

              {/* ===========================
                  Current Guru
              ============================ */}

<div className="flex gap-5">

  <div className="mt-[52px] shrink-0">
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-sand/20">
      <Flower2 className="h-6 w-6 text-brand-primary" />
    </div>
  </div>

  <div className="flex-1">

    <span className="inline-flex rounded-full border border-brand-gold/25 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-brand-primary">
      वर्तमान पीठाधीश्वर
    </span>

    <h3 className="mt-4 font-heading text-3xl leading-tight text-brand-brown">
      परम पूज्य स्वामी ओमानन्द जी महाराज
    </h3>

    <p className="mt-2 text-sm tracking-wide text-brand-brown/60">
      सेवा काल • 2004 – वर्तमान
    </p>

    <p className="mt-5 max-w-md text-base leading-8 text-brand-brown/70">
      गुरु परम्परा को सेवा, आध्यात्मिक मार्गदर्शन एवं
      वैदिक संस्कृति के संरक्षण के साथ निरंतर आगे बढ़ा रहे हैं।
    </p>

  </div>

</div>

            </div>

            {/* CTA */}

            <div className="mt-4 border-t border-brand-gold/15 pt-2">

              <ButtonLink
                href="/guru-parampara"
                variant="link"
                endIcon={<ArrowRight className="h-5 w-5" />}
                className="mt-10 p-0 h-auto"
              >
                गुरु परम्परा के बारे में जानें
              </ButtonLink>

            </div>
                      </div>

        </div>

      </Container>

      {/* ==========================================
          Background Decoration
      =========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-brand-gold/[0.03]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-52
          -right-40
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-brand-primary/[0.03]
          blur-3xl
        "
      />

    </Section>
  );
}