import Image from "next/image";

export default function ArtisticVisionSection() {
  return (
    <section id="artistic-vision" className="pt-0 pb-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/artistic-vision-header.jpg"
            alt="David Willis coral sculpture"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand">
          Artistic Vision & Style
        </h2>
        
        <div className="prose prose-lg mx-auto max-w-4xl mb-12">
          <p className="text-gray-700 leading-relaxed mb-8">
            David Willis worked primarily in sculpture, with painting serving as both independent practice and preparatory study. His sculptural works range from intimate scale to monumental installations, often exploring:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Coral Sculpture Mastery</h3>
            <p className="text-gray-700 leading-relaxed">
              Willis pioneered modern coral sculpture, personally collecting raw coral from beaches and transforming each piece through meticulous carving, sanding, and polishing with tin oxide from Vermont to achieve highly polished surfaces
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Spiritual & Mythological Themes</h3>
            <p className="text-gray-700 leading-relaxed">
              Cross-cultural symbolism drawing from his years living in Asia, Europe, and studying diverse religious traditions
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">International Craftsmanship</h3>
            <p className="text-gray-700 leading-relaxed">
              His global influences reflected in his tools: German leather apron, English chisels and hammers, American protective gear, Japanese and American power tools, Vermont tin oxide, and Japanese grinding discs
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">East-Meets-West Synthesis</h3>
            <p className="text-gray-700 leading-relaxed">
              A unique fusion of Western sculptural tradition with Eastern aesthetic principles of balance, negative space, and contemplative presence
            </p>
          </div>
        </div>

        <div className="prose prose-lg mx-auto max-w-4xl">
          <p className="text-gray-700 leading-relaxed text-center italic">
            Willis&rsquo;s work synthesizes influences from prehistoric caves in France and Spain (which he visited early in his career) with Eastern aesthetic principles. His insistence on personal involvement in every stage—from beach to gallery—resulted in works of extraordinary integrity and refinement.
          </p>
        </div>
      </div>
    </section>
  );
}
