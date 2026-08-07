import { HeartHandshake, MapPin, Crown } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

const cards = [
  {
    icon: HeartHandshake,
    title: "अंतिम दर्शन",
    body: "14 जुलाई 2004 को स्वामी कल्याण देव जी शुकतीर्थ स्थित आश्रम में ब्रह्मलीन हुए। समाचार फैलते ही देश भर से संत-महात्मा, ट्रस्ट के पदाधिकारी, शिष्यगण एवं दूर-दूर से आए लाखों श्रद्धालु अंतिम दर्शन हेतु शुकतीर्थ पहुँचे और भावभीनी श्रद्धांजलि अर्पित की।",
  },
  {
    icon: MapPin,
    title: "समाधि",
    body: "शुकतीर्थ आश्रम परिसर में ही उनकी समाधि बनाई गई, जो आज श्रद्धालुओं के लिए दर्शन एवं प्रेरणा का केंद्र है। प्रतिवर्ष 14 जुलाई को उनकी पुण्यतिथि पूरे आश्रम परिवार द्वारा श्रद्धा एवं भक्ति के साथ मनाई जाती है।",
  },
  {
    icon: Crown,
    title: "उत्तराधिकार",
    body: "देह त्यागने से पूर्व उन्होंने अपने प्रमुख शिष्य स्वामी ओमानन्द ब्रह्मचारी जी (स्वामी ओमानन्द सरस्वती जी) को अपनी सम्पूर्ण सेवा-यात्रा एवं आश्रम का दायित्व सौंपा। वे ही आश्रम के अगले पीठाधीश्वर बने और आज भी गुरु परम्परा को आगे बढ़ा रहे हैं।",
  },
];

export function KalyanDevFarewell() {
  return (
    <Section className="bg-brand-ivory py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
            ✦ ब्रह्मलीन एवं विरासत ✦
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight text-brand-brown md:text-5xl">
            अंतिम विदाई और अखंड परम्परा
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl border border-brand-gold/15 bg-white p-8 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/10">
                <Icon className="h-7 w-7 text-brand-primary" />
              </div>
              <h3 className="mt-6 font-heading text-2xl text-brand-brown">
                {title}
              </h3>
              <p className="mt-4 leading-8 text-brand-brown/75">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
