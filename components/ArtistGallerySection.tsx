export default function ArtistGallerySection() {
  const placeholders = [
    "Sculpture studies",
    "Coral portraits",
    "Stone figures",
    "Studio details",
    "Outdoor installs",
    "Works in progress",
  ];

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
          {placeholders.map((label) => (
            <div
              key={label}
              className="relative h-40 rounded-2xl bg-gradient-to-br from-brand to-accent text-white flex items-center justify-center shadow-md"
              aria-label={label}
            >
              <span className="text-center text-sm font-semibold uppercase tracking-wide drop-shadow-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
