"use client";

import Image from "next/image";

const images = [
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
        <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
          {images.map((image) => (
            <div key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3">
                <p className="text-white text-sm font-medium leading-tight">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
