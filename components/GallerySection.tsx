"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Abstract composition with vibrant colors",
    title: "Vibrant Dreams",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Minimalist landscape painting",
    title: "Quiet Horizons",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Mixed media contemporary art",
    title: "Urban Reflections",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Bold geometric patterns",
    title: "Structured Chaos",
  },
];

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
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                <span className="text-sm">Image {image.id}</span>
              </div>
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
