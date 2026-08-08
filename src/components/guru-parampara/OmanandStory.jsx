import Image from "next/image";
import { Quote } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

export function OmanandStory() {
  return (
    <Section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Image */}
          <div>
            <div className="group overflow-hidden rounded-[32px] border border-brand-gold/20 p-3">
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src="/images/home/guru-parampara.webp"
                  alt="स्वामी कल्याण देव जी एवं स्वामी ओमानन्द जी"
                  width={900}
                  height={1200}
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-brand-brown/60">
              स्वामी ओमानन्द जी महाराज (दाएँ) अपने गुरु स्वामी कल्याण
              देव जी के साथ।
            </p>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
              ✦ गुरु से उत्तराधिकार तक ✦
            </span>

            <h2 className="mt-5 font-heading text-3xl leading-tight text-brand-brown md:text-4xl">
              एक विश्वस्त शिष्य, एक अखंड परम्परा
            </h2>

            <p className="mt-8 text-lg leading-8 text-brand-brown/75">
              स्वामी ओमानन्द ब्रह्मचारी जी दीर्घकाल तक ब्रह्मलीन स्वामी
              कल्याण देव जी महाराज के सान्निध्य में रहकर श्री शुकदेव
              आश्रम की सेवा में समर्पित रहे। उनकी निष्ठा एवं सेवा-भावना
              को देखते हुए स्वामी कल्याण देव जी ने अपनी वसीयत में उन्हें
              आश्रम का एकमात्र उत्तराधिकारी घोषित किया।
            </p>

            <p className="mt-6 text-lg leading-8 text-brand-brown/75">
              सन् 2004 में गुरु के ब्रह्मलीन होने के पश्चात स्वामी
              ओमानन्द जी ने श्री शुकदेव आश्रम, शुकतीर्थ के पीठाधीश्वर
              का दायित्व सम्भाला। ट्रस्ट के समस्त न्यासियों को उनके
              निर्णयों का सम्मान करने का स्पष्ट निर्देश दिया गया था,
              जिससे परम्परा का सुचारु एवं निर्विघ्न हस्तांतरण सुनिश्चित
              हुआ।
            </p>

            <div className="mt-8 rounded-2xl border-l-2 border-brand-gold/40 bg-brand-sand/30 p-6">
              <Quote className="h-5 w-5 text-brand-gold/70" />
              <p className="mt-3 leading-8 text-brand-brown/80">
                &ldquo;स्वामी ओमानन्द जी ने श्री शुकदेव आश्रम के विकास
                हेतु अथक परिश्रम किया है और वे ही मेरे एकमात्र
                उत्तराधिकारी हैं।&rdquo;
              </p>
              <p className="mt-3 text-sm text-brand-brown/60">
                स्वामी कल्याण देव जी की वसीयत से, जिसके आधार पर उन्होंने
                2004 में पीठाधीश्वर का पद ग्रहण किया।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
