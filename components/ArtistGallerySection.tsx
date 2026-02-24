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
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600 shadow-sm">
          Gallery images are temporarily unavailable. Please check back soon or contact the studio for access.
        </div>
      </div>
    </section>
  );
}
