"use client";

import Image from "next/image";

const galleryImages = [1,2,4,5,7,8,9,10,11,12,15,16,19,21,23,27,38,39,40,41,42].map(num => ({
  id: num,
  src: `/images/david willis coral sculptorPC - A -${String(num).padStart(2, '0')}.jpg`,
  alt: `David Willis coral sculpture ${num}`,
  title: `Coral Sculpture ${num}`,
}));

export default function GallerySection() {
  return (
    <section id="gallery" className="pt-0 pb-20 px-4 bg-surface-light">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/gallery-header.jpg"
            alt="David Willis coral sculpture"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 leading-relaxed text-center italic text-lg">
            Willis&rsquo;s work synthesizes influences from prehistoric caves in France and Spain (which he visited early in his career) with Eastern aesthetic principles. His insistence on personal involvement in every stage—from beach to gallery—resulted in works of extraordinary integrity and refinement.
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand">
          Gallery
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 33vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
