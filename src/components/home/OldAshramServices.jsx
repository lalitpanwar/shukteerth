import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { ButtonLink } from "@/components/ui/custom";

export default function OldAshramLife() {
  return (
    <Section className="relative overflow-hidden bg-white py-20 md:py-24 xl:py-28">

      <Container>

        {/* ==========================================
            Section Header
        ========================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary">
            आश्रम जीवन
          </span>

          <h2
            className="
              mt-5
              font-heading
              text-4xl
              leading-tight
              text-brand-brown
              sm:text-5xl
              xl:text-6xl
            "
          >
            सेवा • साधना • संस्कार
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-brand-brown/70
            "
          >
            श्री शुकदेव आश्रम का प्रत्येक दिवस सेवा,
            श्रद्धा एवं सनातन संस्कृति की जीवंत अनुभूति कराता है।
          </p>

        </div>

        {/* ==========================================
            Editorial Mosaic Layout
        ========================================== */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[1.35fr_0.95fr]
            xl:gap-8
          "
        >

          {/* ======================================
              Featured Card
          ====================================== */}

          <article
            className="
              group
              row-span-3
              overflow-hidden
              rounded-[32px]
              border
              border-brand-gold/15
              bg-brand-ivory
            "
          >

            <div className="overflow-hidden">

              <Image
                src="/images/temp/bhagwat-katha.jpg"
                alt="Bhagwat Katha"
                width={900}
                height={800}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

            <div className="p-8">

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-brand-gold/25
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  tracking-[0.18em]
                  text-brand-primary
                "
              >
                मुख्य आध्यात्मिक सेवा
              </span>

              <h3 className="mt-5 font-heading text-4xl text-brand-brown">
                श्रीमद्भागवत कथा
              </h3>

              <p className="mt-5 text-lg leading-8 text-brand-brown/70">
                प्रतिदिन श्रीमद्भागवत कथा एवं आध्यात्मिक
                प्रवचनों के माध्यम से श्रद्धालुओं को
                सनातन ज्ञान का अमृत प्रदान किया जाता है।
              </p>

              <ButtonLink
                href="/bhagwat-booking"
                variant="link"
                endIcon={<ArrowRight />}
                className="
                  mt-8
                  px-0
                  font-heading
                  text-lg
                  text-brand-primary
                "
              >
                कथा बुक करें
              </ButtonLink>

            </div>

          </article>

          {/* ======================================
              Right Column
          ====================================== */}

<div className="grid gap-6">

  {/* ======================================
      गौ संरक्षण
  ====================================== */}

  <article
    className="
      group
      overflow-hidden
      rounded-[28px]
      border
      border-brand-gold/15
      bg-brand-ivory
      transition-all
      duration-500
      hover:border-brand-gold/40
    "
  >

    <div className="grid grid-cols-[140px_1fr]">

      <div className="overflow-hidden">

        <Image
          src="/images/temp/gau-seva.jpg"
          alt="गौ संरक्षण"
          width={500}
          height={400}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

      </div>

      <div className="flex flex-col justify-center p-6">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
          सेवा
        </span>

        <h3 className="mt-3 font-heading text-2xl text-brand-brown">
          गौ संरक्षण
        </h3>

        <p className="mt-3 text-sm leading-7 text-brand-brown/70">
          गौशाला में गौमाता की सेवा, संरक्षण एवं
          संवर्धन की निरंतर परम्परा।
        </p>

      </div>

    </div>

  </article>

  {/* ======================================
      गुरुकुल
  ====================================== */}

  <article
    className="
      group
      overflow-hidden
      rounded-[28px]
      border
      border-brand-gold/15
      bg-brand-ivory
      transition-all
      duration-500
      hover:border-brand-gold/40
    "
  >

    <div className="grid grid-cols-[140px_1fr]">

      <div className="overflow-hidden">

        <Image
          src="/images/temp/gurukul.jpg"
          alt="गुरुकुल"
          width={500}
          height={400}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

      </div>

      <div className="flex flex-col justify-center p-6">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
          शिक्षा
        </span>

        <h3 className="mt-3 font-heading text-2xl text-brand-brown">
          गुरुकुल
        </h3>

        <p className="mt-3 text-sm leading-7 text-brand-brown/70">
          वैदिक शिक्षा, संस्कार एवं भारतीय
          संस्कृति का संरक्षण।
        </p>

      </div>

    </div>

  </article>

  {/* ======================================
      अन्नदान
  ====================================== */}

  <article
    className="
      group
      overflow-hidden
      rounded-[28px]
      border
      border-brand-gold/15
      bg-brand-ivory
      transition-all
      duration-500
      hover:border-brand-gold/40
    "
  >

    <div className="grid grid-cols-[140px_1fr]">

      <div className="overflow-hidden">

        <Image
          src="/images/temp/annadan.jpg"
          alt="अन्नदान"
          width={500}
          height={400}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

      </div>

      <div className="flex flex-col justify-center p-6">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
          सेवा
        </span>

        <h3 className="mt-3 font-heading text-2xl text-brand-brown">
          अन्नदान
        </h3>

        <p className="mt-3 text-sm leading-7 text-brand-brown/70">
          प्रतिदिन श्रद्धालुओं के लिए
          निःशुल्क भोजन एवं प्रसाद सेवा।
        </p>

      </div>

    </div>

  </article>

</div>

        </div>

        {/* ======================================
            Bottom Row
        ====================================== */}

        <div
          className="
            mt-6
            grid
            gap-6
            md:grid-cols-2
            xl:gap-8
          "
        >

{/* ======================================
    वृक्षारोपण
====================================== */}

<article
  className="
    group
    overflow-hidden
    rounded-[30px]
    border
    border-brand-gold/15
    bg-brand-ivory
    transition-all
    duration-500
    hover:border-brand-gold/40
  "
>

  <div className="grid md:grid-cols-[220px_1fr]">

    <div className="overflow-hidden">

      <Image
        src="/images/temp/tree-plantation.jpg"
        alt="वृक्षारोपण"
        width={700}
        height={500}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

    </div>

    <div className="flex flex-col justify-center p-8">

      <span
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-brand-primary
        "
      >
        पर्यावरण
      </span>

      <h3 className="mt-3 font-heading text-3xl text-brand-brown">

        वृक्षारोपण

      </h3>

      <p className="mt-4 leading-8 text-brand-brown/70">

        प्रकृति संरक्षण एवं पर्यावरण संतुलन के लिए
        नियमित वृक्षारोपण एवं हरित अभियान चलाए जाते हैं।

      </p>

    </div>

  </div>

</article>

{/* ======================================
    धार्मिक आयोजन
====================================== */}

<article
  className="
    group
    overflow-hidden
    rounded-[30px]
    border
    border-brand-gold/15
    bg-brand-ivory
    transition-all
    duration-500
    hover:border-brand-gold/40
  "
>

  <div className="grid md:grid-cols-[220px_1fr]">

    <div className="overflow-hidden">

      <Image
        src="/images/temp/religious-events.jpg"
        alt="धार्मिक आयोजन"
        width={700}
        height={500}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

    </div>

    <div className="flex flex-col justify-center p-8">

      <span
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-brand-primary
        "
      >
        आयोजन
      </span>

      <h3 className="mt-3 font-heading text-3xl text-brand-brown">

        धार्मिक आयोजन

      </h3>

      <p className="mt-4 leading-8 text-brand-brown/70">

        यज्ञ, उत्सव, सत्संग एवं विविध धार्मिक
        आयोजनों द्वारा आध्यात्मिक वातावरण सजीव रहता है।

      </p>

    </div>

  </div>

</article>
        </div>

      </Container>

    </Section>
  );
}