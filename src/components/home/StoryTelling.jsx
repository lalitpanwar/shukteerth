"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";
import { stories } from "@/data/story.data";
import { ButtonLink } from "../ui/custom";
import { ArrowRight } from "lucide-react";

export default function StoryTelling() {
  const [activeStory, setActiveStory] = useState(["story-1"]);

  const activeItem =
    stories.find((item) => item.id === activeStory?.[0]) ?? stories[0];
  return (
    <Section className="bg-brand-ivory">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-brand-gold/40"></span>

            <span className="h-2 w-2 rounded-full bg-brand-gold"></span>

            <span className="h-px w-16 bg-brand-gold/40"></span>
          </div>

          <p className="text-sm uppercase tracking-[0.22em] text-brand-primary">
            शुकतीर्थ की दिव्य यात्रा
          </p>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            जहाँ समय ठहर जाता है
            <br />
            और श्रद्धा का इतिहास जीवंत हो उठता है।
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-brown/75">
            पाँच हजार वर्षों की यह यात्रा केवल इतिहास नहीं, बल्कि श्रद्धा, ज्ञान
            और सनातन संस्कृति का अमर प्रवाह है।
          </p>
        </div>

        {/* Main Layout */}

        <div className="grid gap-20 lg:grid-cols-[470px_1fr]">
          {/* Left Image */}

          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
              <Image
                src={activeItem.image}
                alt={activeItem.overlayTitle}
                width={700}
                height={900}
                className="aspect-[4/5] w-full object-cover transition-all duration-500"
              />

              <div
                key={activeItem.id}
                className="absolute inset-x-0 animate-fade bottom-0 bg-gradient-to-t from-brand-brown via-brand-brown/70 to-transparent p-8"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-brand-gold">
                  {activeItem.overlayBadge}
                </span>

                <h3 className="mt-3 font-heading text-3xl text-brand-ivory">
                  {activeItem.overlayTitle}
                </h3>

                <p className="mt-2 text-brand-ivory/80">
                  {activeItem.overlaySubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Accordion */}

          <div>
            <Accordion value={activeStory} onValueChange={setActiveStory} >
              {stories.map((story) => (
                <AccordionItem
                  key={story.id}
                  value={story.id}
                  className="border-b border-brand-border last:border-b-0"
                >
                  <AccordionTrigger className="py-8 hover:no-underline">
                    <div className="flex w-full items-start gap-6 text-left">
                      {/* Number */}

                      <span className="w-14 shrink-0 font-heading text-5xl leading-none text-brand-gold/20">
                        {story.number}
                      </span>

                      {/* Text */}

                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                          {story.overlayBadge}
                        </p>

                        <h3 className="mt-3 font-heading text-2xl leading-snug text-brand-brown md:text-3xl">
                          {story.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    {/* Mobile Image */}
                    <div className="mb-8 lg:hidden">
                      <div className="relative overflow-hidden rounded-3xl ring-1 ring-brand-gold/20 shadow-xl">
                        <Image
                          src={story.image}
                          alt={story.overlayTitle}
                          width={700}
                          height={420}
                          className="aspect-[16/9] w-full object-cover"
                        />

                        {/* Overlay */}

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-brown via-brand-brown/60 to-transparent p-5">
                          <span className="text-[11px] uppercase tracking-[0.22em] text-brand-gold">
                            ✦ {story.overlayBadge}
                          </span>

                          <h4 className="mt-2 font-heading text-2xl text-white">
                            {story.overlayTitle}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-white/85">
                            {story.overlaySubtitle}
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Mobile Image */}
                    {/* Content */}
                    <div className="pl-0 lg:pl-20">
                      <div className="mb-6 h-px w-20 bg-brand-gold"></div>

                      <p className="text-base leading-8 text-brand-brown/75 md:text-lg">
                        {story.description}
                      </p>

<ButtonLink
  href="/shukteerth"
  variant="link"
  className="mt-8 p-0 h-auto text-sm tracking-[0.15em]"
  endIcon={<ArrowRight className="h-5 w-5" />}
>
  और जानें 
</ButtonLink>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  );
}
