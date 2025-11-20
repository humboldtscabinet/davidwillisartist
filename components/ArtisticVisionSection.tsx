export default function ArtisticVisionSection() {
  return (
    <section id="artistic-vision" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
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
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Organic & Natural Forms</h3>
            <p className="text-gray-700 leading-relaxed">
              Flowing, biomorphic shapes inspired by coral, bone, geological formations, and the architecture of living systems
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Spiritual & Mythological Themes</h3>
            <p className="text-gray-700 leading-relaxed">
              Cross-cultural symbolism drawing from his years living in Asia, Europe, and studying diverse religious traditions
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Material Mastery</h3>
            <p className="text-gray-700 leading-relaxed">
              Expert handling of stone, wood, bronze, and mixed media, with particular attention to surface texture and patina
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
            His work resists easy categorization, existing at the intersection of Abstract Expressionism, organic modernism, and transcultural spirituality. Each piece invites prolonged viewing, revealing layers of meaning and technical sophistication that reward careful study.
          </p>
        </div>
      </div>
    </section>
  );
}
