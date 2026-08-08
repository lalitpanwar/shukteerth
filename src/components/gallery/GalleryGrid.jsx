"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKey(event) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (images.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-brand-gold/30 bg-brand-sand/20 py-24 text-center">
        <p className="text-brand-brown/60">
          अभी कोई तस्वीर उपलब्ध नहीं है — जल्द ही झलकियाँ जोड़ी जाएँगी।
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl bg-brand-sand shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`आश्रम गैलरी छवि ${index + 1}`}
              loading="lazy"
              className="block w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm duration-150 animate-in fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="बंद करें"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="पिछली तस्वीर"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[activeIndex]}
            alt={`आश्रम गैलरी छवि ${activeIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="अगली तस्वीर"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
