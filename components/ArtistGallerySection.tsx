import Image from "next/image";

const images = [
  "Site Gallery 1david willis coral sculptorPC - A -01.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -02.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -03.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -04.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -05.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -09.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -19.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -21.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -23.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -27.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -38.jpg",
  "Site Gallery 1david willis coral sculptorPC - A -42.jpg",
];

const buildAlt = (filename: string) => {
  const match = filename.match(/- A -(\d+)/);
  return match ? `Site gallery piece A-${match[1]}` : "Site gallery piece";
};

export default function ArtistGallerySection() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-md"
            >
              <Image
                src={`/images/${src}`}
                alt={buildAlt(src)}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
