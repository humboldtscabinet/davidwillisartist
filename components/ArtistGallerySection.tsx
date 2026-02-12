import Image from "next/image";

const images = [
  "Classic Gallerydavid willis coral sculptorPC - A -01.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -02.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -04.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -05.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -07.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -08.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -09.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -10.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -12.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -15.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -16.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -19.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -21.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -23.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -27.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -38.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -39.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -40.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -41.jpg",
  "Classic Gallerydavid willis coral sculptorPC - A -42.jpg",
];

export default function ArtistGallerySection() {
  const buildAlt = (filename: string) => `Classic gallery piece ${filename.split(" - A - ")[1]?.replace(".jpg", "") ?? ""}`;

  return (
    <section id="artist-gallery" className="bg-surface-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            Artist Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand mb-4">Artist Gallery</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A rotating selection of David Willis&rsquo;s coral and stone works. For high-resolution images and inquiries, please contact the studio directly.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
              <Image
                src={`/images/${src}`}
                alt={buildAlt(src)}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
