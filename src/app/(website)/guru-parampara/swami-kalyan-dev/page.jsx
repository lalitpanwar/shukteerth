import {
  KalyanDevHero,
  KalyanDevStats,
  KalyanDevStory,
  KalyanDevTimeline,
  KalyanDevMission,
  KalyanDevGallery,
  KalyanDevHonors,
  KalyanDevFarewell,
  KalyanDevLegacy,
} from "@/components/guru-parampara";

export const metadata = {
  title: "स्वामी कल्याण देव जी महाराज | संस्थापक, श्री शुकदेव आश्रम",
  description:
    "श्री शुकदेव आश्रम, शुकतीर्थ के संस्थापक स्वामी कल्याण देव जी महाराज (1876–2004) का जीवन परिचय — प्रारम्भिक जीवन, संन्यास दीक्षा, शिक्षा एवं सेवा के कार्य, सम्मान, ब्रह्मलीन होना और विरासत।",
  openGraph: {
    title: "स्वामी कल्याण देव जी महाराज | श्री शुकदेव आश्रम",
    description:
      "शिक्षा, सेवा और समरसता को जीवन-व्रत बनाने वाले संस्थापक स्वामी कल्याण देव जी महाराज का जीवन परिचय।",
  },
};

export default function SwamiKalyanDevPage() {
  return (
    <>
      <KalyanDevHero />
      <KalyanDevStats />
      <KalyanDevStory />
      <KalyanDevTimeline />
      <KalyanDevMission />
      <KalyanDevGallery />
      <KalyanDevHonors />
      <KalyanDevFarewell />
      <KalyanDevLegacy />
    </>
  );
}
