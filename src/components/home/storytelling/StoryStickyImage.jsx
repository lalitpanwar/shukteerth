import Image from "next/image";

export default function StoryStickyImage() {
  return (
    <div className="sticky top-28">

      <div
        className="
          relative
          overflow-hidden

          rounded-2xl

          border
          border-brand-border

          bg-white

          shadow-xl
        "
      >
        <Image
          src="/images/storytelling/akshay-vat.jpg"
          alt="अक्षय वट"
          width={700}
          height={900}
          className="aspect-[4/5] w-full object-cover"
        />

        {/* Dark Gradient */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Caption */}

        <div className="absolute bottom-8 left-8 right-8">

          <p className="mb-2 text-sm uppercase tracking-[0.18em] text-brand-gold">
            अक्षय वट
          </p>

          <h3 className="font-heading text-3xl text-white">
            पाँच हजार वर्षों की
            <br />
            दिव्य परम्परा
          </h3>

        </div>

      </div>

    </div>
  );
}
