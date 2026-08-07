"use client";

import Image from "next/image";
import {
  ArrowRight,
  Car,
  Train,
  Plane,
  BedDouble,
  UtensilsCrossed,
  ParkingCircle,
  Clock3,
  MapPin,
  ShieldCheck,
  BookOpen,
  PhoneCall,
  MapIcon,
} from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

export default function VisitShukteerth() {
  return (
    <Section id="visit" className="relative scroll-mt-32 overflow-hidden bg-brand-ivory py-24 lg:py-32">
      <Container>

        {/* ============================
            Header
        ============================ */}
               
        <div className="mx-auto max-w-3xl text-center mb-16 ">

          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">

            ✦ तीर्थ दर्शन ✦

          </span>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">

            शुकतीर्थ पधारें
            

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-brown/75">

            एक बार इस पावन भूमि पर अवश्य पधारें।

          </p>

        </div>



        {/* ============================
            Main Layout
        ============================ */}

        <div className="grid gap-12 xl:grid-cols-[540px_1fr]">

          {/* =====================================
              LEFT IMAGE
          ====================================== */}

          <div className="xl:sticky xl:top-28 xl:self-start">

            <div className="group relative overflow-hidden rounded-[34px] shadow-2xl">

              <Image
                src="/images/home/shri-shukdev-ashram-muzaffarnagar.webp"
                alt="Shri Shukdev Ashram"
                width={900}
                height={1200}
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Top Badge */}

              <div className="absolute left-6 top-6">

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">

                  <MapPin className="h-4 w-4 text-brand-primary" />

                  <span className="text-sm font-medium">
                    मुख्य प्रवेश द्वार
                  </span>

                </span>

              </div>

              {/* Bottom Gradient */}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8">

                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur">

                  <ShieldCheck className="h-7 w-7 text-brand-gold" />

                </div>

                <h3 className="mt-6 font-heading text-4xl text-white">
                  श्री शुकदेव आश्रम
                </h3>

                <p className="mt-2 text-lg text-white/80">
                  शुकतीर्थ, उत्तर प्रदेश
                </p>

               </div>

            </div>

          </div>


{/* =====================================
    RIGHT CONTENT (BALANCED VERSION)
====================================== */}

<div className="space-y-8">
  {/* How to Reach Section */}
  <div>
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/10">
        <MapPin className="h-5 w-5 text-brand-primary" />
      </div>
      <h3 className="font-heading text-2xl text-brand-brown">
        कैसे पहुँचें
      </h3>
    </div>

    {/* Travel Cards Grid */}
    <div className="grid gap-4 sm:grid-cols-3">
      {/* Road */}
      <div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10">
          <Car className="h-5.5 w-5.5 text-brand-primary" />
        </div>
        <h4 className="mt-3.5 font-heading text-lg text-brand-brown">
          सड़क मार्ग
        </h4>
        <p className="mt-1.5 text-xs text-brand-brown/70 leading-relaxed">
          दिल्ली → मेरठ → मुज़फ्फरनगर → शुकतीर्थ
        </p>
        <div className="mt-3.5 border-t border-brand-gold/15 pt-2.5 text-xs">
          <span className="text-brand-brown/70">लगभग दूरी:</span>
          <span className="ml-1.5 font-bold text-brand-primary">130 KM</span>
        </div>
      </div>

      {/* Railway */}
      <div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10">
          <Train className="h-5.5 w-5.5 text-brand-primary" />
        </div>
        <h4 className="mt-3.5 font-heading text-lg text-brand-brown">
          रेलवे स्टेशन
        </h4>
        <p className="mt-1.5 text-xs text-brand-brown/70 leading-relaxed">
          मुज़फ्फरनगर रेलवे स्टेशन
        </p>
        <div className="mt-3.5 border-t border-brand-gold/15 pt-2.5 text-xs">
          <span className="text-brand-brown/70">लगभग दूरी:</span>
          <span className="ml-1.5 font-bold text-brand-primary">30 KM</span>
        </div>
      </div>

      {/* Airport */}
      <div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10">
          <Plane className="h-5.5 w-5.5 text-brand-primary" />
        </div>
        <h4 className="mt-3.5 font-heading text-lg text-brand-brown">
          एयरपोर्ट
        </h4>
        <p className="mt-1.5 text-xs text-brand-brown/70 leading-relaxed">
          इंदिरा गांधी हवाई अड्डा (IGI), नई दिल्ली
        </p>
        <div className="mt-3.5 border-t border-brand-gold/15 pt-2.5 text-xs">
          <span className="text-brand-brown/70">लगभग दूरी:</span>
          <span className="ml-1.5 font-bold text-brand-primary">150 KM</span>
        </div>
      </div>
    </div>
  </div>

  {/* Ashram Facilities Section */}
  <div>
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/10">
        <BedDouble className="h-5 w-5 text-brand-primary" />
      </div>
      <h3 className="font-heading text-2xl text-brand-brown">
        आश्रम सुविधाएँ एवं आध्यात्मिक अनुभव
      </h3>
    </div>

    {/* Facilities Grid (2x2 Balanced Layout) */}
    <div className="grid gap-4 md:grid-cols-2">
      {/* Stay */}
      <div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
            <BedDouble className="h-6 w-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-heading text-lg text-brand-brown">आश्रम आवास</h4>
            <p className="mt-1 text-xs leading-relaxed text-brand-brown/70">
              यजमान एवं परिवार के लिए स्वच्छ एवं आरामदायक आवास व्यवस्था।
            </p>
          </div>
        </div>
      </div>

      {/* Bhojan */}
      <div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
            <UtensilsCrossed className="h-6 w-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-heading text-lg text-brand-brown">सात्विक भोजन</h4>
            <p className="mt-1 text-xs leading-relaxed text-brand-brown/70">
              प्रतिदिन प्रसाद एवं शुद्ध सात्विक भोजन की उत्तम व्यवस्था।
            </p>
          </div>
        </div>
      </div>
       {/* Bhagwat katha */}
<div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
  <div className="flex items-center gap-3.5">

    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
      <BookOpen className="h-6 w-6 text-brand-primary" />
    </div>

    <div>

      <h4 className="font-heading text-lg text-brand-brown">
        दैनिक श्रीमद्भागवत कथा
      </h4>

      <p className="mt-1 text-xs leading-relaxed text-brand-brown/70">
        प्रतिदिन विद्वान आचार्यों द्वारा
        श्रीमद्भागवत कथा एवं सत्संग का आयोजन।
      </p>

    </div>

  </div>
</div>
      {/* Parking */}
      {/* <div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
            <ParkingCircle className="h-6 w-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-heading text-lg text-brand-brown">पार्किंग</h4>
            <p className="mt-1 text-xs leading-relaxed text-brand-brown/70">
              चार पहिया एवं दो पहिया वाहनों हेतु सुरक्षित पार्किंग स्थान।
            </p>
          </div>
        </div>
      </div> */}

      {/* Darshan */}
      <div className="rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/30 hover:shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10">
            <Clock3 className="h-6 w-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-heading text-lg text-brand-brown">दर्शन समय</h4>
            <p className="mt-1 text-xs leading-relaxed text-brand-brown/70">
              प्रतिदिन प्रातः 5:00 AM से रात्रि 9:00 PM तक खुला रहता है।
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* Heritage Banner */}
    <div className="mt-6 rounded-2xl border border-brand-gold/20 bg-gradient-to-r from-[#FFF8EA] via-[#FFFDF8] to-[#FFF5DD] p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/15">
          <ShieldCheck className="h-6 w-6 text-brand-primary" />
        </div>
        <div>
          <h4 className="font-heading text-base text-brand-brown">
            श्रद्धा के साथ इस पावन भूमि पर अवश्य पधारें।
          </h4>
          <p className="mt-0.5 text-xs text-brand-brown/70">
            5000+ वर्षों की आध्यात्मिक विरासत आपका स्वागत करती है।
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="pt-6">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <ButtonLink
          href="https://maps.google.com"
          target="_blank"
         startIcon={<MapIcon />}
          
        >
          Google Maps पर दिशा देखें 
        </ButtonLink>

        <ButtonLink
          href="/contact"
          variant="secondary"
         startIcon={<PhoneCall />}
        >
          यात्रा की जानकारी लें 
        </ButtonLink>
      </div>

      <p className="mt-4 text-center text-xs text-brand-brown/60">
        यात्रा, आवास या दर्शन से संबंधित किसी भी जानकारी के लिए हमारी टीम आपकी सहायता हेतु सदैव उपलब्ध है।
      </p>
    </div>
  </div>
  
</div>


        </div>

</Container>

</Section>

);
}
