"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const galleryImages = [1,2,3,4,5,7,8,9,10,11,12,15,16,19,21,23,27,38,39,40,41,42].map(num => ({
  id: num,
  src: `/images/david willis coral sculptorPC - A -${String(num).padStart(2, '0')}.jpg`,
  alt: `David Willis coral sculpture ${num}`,
  title: `Coral Sculpture ${num}`,
}));

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-surface-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label={`View ${image.title}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
