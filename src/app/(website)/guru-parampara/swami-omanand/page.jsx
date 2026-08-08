import {
  OmanandHero,
  OmanandStats,
  OmanandStory,
  OmanandTimeline,
  OmanandParallaxQuote,
  OmanandMission,
  OmanandGallery,
  OmanandQuotes,
  OmanandPress,
  OmanandLegacy,
} from "@/components/guru-parampara";

export const metadata = {
  title: "स्वामी ओमानन्द जी महाराज | पीठाधीश्वर, श्री शुकदेव आश्रम",
  description:
    "श्री शुकदेव आश्रम, शुकतीर्थ के वर्तमान पीठाधीश्वर स्वामी ओमानन्द जी महाराज का परिचय — स्वामी कल्याण देव जी से उत्तराधिकार, शिक्षा, पर्यावरण एवं धार्मिक सेवा-कार्य।",
  openGraph: {
    title: "स्वामी ओमानन्द जी महाराज | श्री शुकदेव आश्रम",
    description:
      "2004 से श्री शुकदेव आश्रम, शुकतीर्थ की सेवा-परम्परा को आगे बढ़ाने वाले वर्तमान पीठाधीश्वर स्वामी ओमानन्द जी महाराज का परिचय।",
  },
};

export default function SwamiOmanandPage() {
  return (
    <>
      <OmanandHero />
      <OmanandStats />
      <OmanandStory />
      <OmanandTimeline />
      <OmanandParallaxQuote />
      <OmanandMission />
      <OmanandGallery />
      <OmanandQuotes />
      <OmanandPress />
      <OmanandLegacy />
    </>
  );
}
