"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const slides = [
  {
    src: "/images/Coral Art Rag PhotosB-06555.jpg",
    alt: "Coral sculpture with open mouth and lace-like texture",
    title: "Coral Art Rag 06555",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06557.jpg",
    alt: "Coral sun face sculpture smiling softly on a shelf",
    title: "Coral Art Rag 06557",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06624.jpg",
    alt: "Rounded coral face sculpture with closed eyes on display",
    title: "Coral Art Rag 06624",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06628.jpg",
    alt: "Large coral face on metal rack with serene expression",
    title: "Coral Art Rag 06628",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06638.jpg",
    alt: "Reclining coral figure with flowing form and closed eyes",
    title: "Coral Art Rag 06638",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06639.jpg",
    alt: "Smiling coral sculpture resting on a workbench",
    title: "Coral Art Rag 06639",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06662.jpg",
    alt: "Coral turtle-inspired sculpture on studio floor",
    title: "Coral Art Rag 06662",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06671.jpg",
    alt: "Textured coral face sculpture with deep grooves and raised brow",
    title: "Coral Art Rag 06671",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06693.jpg",
    alt: "Outdoor stone figure with clasped hands and peaceful smile",
    title: "Coral Art Rag 06693",
  },
  {
    src: "/images/Coral Art Rag PhotosB-06832.jpg",
    alt: "Outdoor stone face sculpture smiling in warm sunlight",
    title: "Coral Art Rag 06832",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<(typeof slides)[number] | null>(
    null
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxImage) return;
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      } else if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxImage]);

  const goTo = (index: number) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const openLightbox = () => setLightboxImage(slides[current]);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section id="gallery" className="pt-0 pb-20 px-4 bg-surface-light">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 leading-relaxed text-center italic text-lg">
            Willis&rsquo;s work synthesizes influences from prehistoric caves in France and Spain (which he visited early in his career) with Eastern aesthetic principles. His insistence on personal involvement in every stage—from beach to gallery—resulted in works of extraordinary integrity and refinement.
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand">
          Gallery
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-2xl bg-gray-200">
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              sizes="(max-width: 768px) 90vw, 80vw"
              className="object-cover"
              priority
              onClick={openLightbox}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-sm uppercase tracking-wide text-white/80">Coral & Stone Works</p>
                <p className="text-xl font-semibold">{slides[current].title}</p>
              </div>
              <button
                onClick={openLightbox}
                className="hidden sm:inline-flex items-center px-3 py-2 rounded-full bg-white/80 text-gray-900 text-sm font-medium hover:bg-white transition"
              >
                View fullscreen
              </button>
            </div>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full h-12 w-12 flex items-center justify-center hover:bg-black/80 transition"
            >
              &larr;
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full h-12 w-12 flex items-center justify-center hover:bg-black/80 transition"
            >
              &rarr;
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-3 w-3 rounded-full transition ${
                  current === index ? "bg-brand" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
    </section>
  );
}
