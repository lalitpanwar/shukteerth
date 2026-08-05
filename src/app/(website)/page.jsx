
"use client";


import { MobileNav } from "@/components/navigation/MobileNav";
import Hero from "@/components/section/hero/Hero";



import TestHero from "@/components/section/hero/TestHero";
import Container from "@/components/shared/container";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import Section from "@/components/shared/section";
import { useState } from "react";
import StoryTelling from "@/components/home/StoryTelling";
import AboutAshram from "@/components/home/AboutAshram";


export default function HomePage(){

 const [language, setLanguage] = useState("hi");
    return(
        <>
<Hero />
<StoryTelling />
<AboutAshram />
<Section>
    <Container>
        <MobileNav />
        <LanguageSwitcher
        value={language}
        onChange={setLanguage}
         />
  hi</Container>
  </Section>    
        </>
    )
}