"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/custom";

import { ashramLife } from "@/data/ashramLife.data";

export default function AshramLife() {
  const featured = ashramLife.find((item) => item.featured);
  const rest = ashramLife.filter((item) => !item.featured);

  return (
    <Section className="bg-white py-20 lg:py-28">
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
                    <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">

            ✦  आश्रम जीवन ✦

          </span>


            <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl xl:text-6xl">
              सेवा • साधना • संस्कार
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-brown/70">
              श्री शुकदेव आश्रम में सेवा, साधना और संस्कार के साथ एक दिव्य जीवन
              की अनुभूति करें।
            </p>
          </div>

          <ButtonLink
            href="/ashram-life"
            variant="link"
            endIcon={
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            }
            className="shrink-0 px-0 text-base font-medium text-brand-primary hover:text-brand-gold"
          >
            आश्रम के बारे में जानें
          </ButtonLink>
        </div>

        {/* Featured Service */}
        {featured && (
          <article
            className="
    group relative mb-6 h-80 overflow-hidden rounded-2xl
    transition-shadow duration-700 ease-out
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.16)]
    md:h-110
  "
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            <div className="absolute left-6 top-6">
              <span
                className="
        inline-flex items-center rounded-full
        bg-brand-gold px-4 py-1.5
        text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary
      "
              >
                {featured.badge}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 max-w-2xl p-8 md:p-10">
              <h3 className="font-heading text-3xl leading-snug text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] md:text-4xl">
                {featured.title}
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)] md:text-lg">
                {featured.description}
              </p>

              <ButtonLink
                href={featured.href}
                variant="link"
                endIcon={
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                }
                className="mt-5 px-0 text-sm text-white hover:text-brand-gold"
              >
                और जानें
              </ButtonLink>
            </div>
          </article>
        )}

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((item) => (
            <article
              key={item.id}
              className="
    group relative h-[400px] overflow-hidden rounded-2xl
    transition-shadow duration-700 ease-out
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.14)]
  "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />

              {/* Gradient for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Badge */}
              <div className="absolute left-6 top-6">
                <span
                  className="
        inline-flex items-center rounded-full
        bg-black/30 px-3 py-1
        text-xs font-medium tracking-wide text-white
        backdrop-blur-sm
      "
                >
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-heading text-2xl leading-snug text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
                  {item.description}
                </p>

                <ButtonLink
                  href={item.href}
                  variant="link"
                  endIcon={
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  }
                  className="mt-4 px-0 text-sm text-white/90 hover:text-white"
                >
                  और जानें
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>


      </Container>
    </Section>
  );
}
