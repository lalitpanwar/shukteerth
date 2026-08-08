import Image from "next/image";
import { Quote } from "lucide-react";

import Section from "@/components/shared/section";
import Container from "@/components/shared/container";

export function KalyanDevStory() {
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
              स्वामी कल्याण देव जी (बाएँ) अपने शिष्य एवं उत्तराधिकारी
              स्वामी ओमानन्द जी महाराज के साथ।
            </p>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-brand-primary">
              ✦ प्रारम्भिक जीवन एवं साधना ✦
            </span>

            <h2 className="mt-5 font-heading text-3xl leading-tight text-brand-brown md:text-4xl">
              सत्य की खोज से संन्यास तक
            </h2>

            <p className="mt-8 text-lg leading-8 text-brand-brown/75">
              स्वामी कल्याण देव जी का जन्म सन् 1876 में ग्राम कोताना,
              जनपद बागपत के एक कृषक परिवार में हुआ था। बचपन का नाम
              कालूराम था, और उनका बाल्यकाल मुंडभर गाँव, मुज़फ्फरनगर में
              व्यतीत हुआ। बाल्यावस्था से ही उनमें गहन आध्यात्मिक प्रवृत्ति
              थी, जिसके कारण उन्होंने अल्पायु में ही सत्य की खोज में घर
              त्याग दिया।
            </p>

            <p className="mt-6 text-lg leading-8 text-brand-brown/75">
              अयोध्या और हरिद्वार होते हुए वे साधु-संतों की संगति में
              भ्रमण करते रहे। सन् 1900 में मुनि की रेती, ऋषिकेश में उन्होंने
              स्वामी पूर्णानन्द जी से संन्यास दीक्षा ग्रहण की। गुरु ने ही
              उन्हें &lsquo;कल्याण देव&rsquo; नाम प्रदान किया। इसके पश्चात
              उन्होंने हिमालय की गोद में वर्षों तप एवं शास्त्र-अध्ययन में
              व्यतीत किए।
            </p>

            <div className="mt-8 rounded-2xl border-l-2 border-brand-gold/40 bg-brand-sand/30 p-6">
              <Quote className="h-5 w-5 text-brand-gold/70" />
              <p className="mt-3 font-heading text-xl leading-relaxed text-brand-brown">
                &ldquo;यदि ईश्वर के दर्शन करने हैं, तो निर्धन की झोंपड़ी
                में जाओ।&rdquo;
              </p>
              <p className="mt-3 text-sm text-brand-brown/60">
                स्वामी विवेकानन्द जी के इस उद्घोष से 1902 की भेंट में गहराई
                से प्रभावित होकर उन्होंने अपना जीवन समाज-सेवा को समर्पित
                करने का संकल्प लिया।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
