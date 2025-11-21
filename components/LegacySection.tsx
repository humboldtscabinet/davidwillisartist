export default function LegacySection() {
  return (
    <section id="legacy" className="py-20 px-4 bg-surface-dark text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Philosophy & Legacy
        </h2>
        
        <div className="mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">From David Willis&rsquo;s writings and family reflections:</p>
          <blockquote className="italic text-lg md:text-xl leading-relaxed border-l-4 border-accent pl-6">
            &ldquo;Art is not a commodity—it is a conversation across time. Each sculpture begins as a dialogue between material and vision, between what is and what might be.&rdquo;
          </blockquote>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            The Estate Collection
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            David Willis&rsquo;s family has carefully preserved his life&rsquo;s work—an extraordinary archive spanning 1970–2020. Unlike many artists whose works are scattered across private collections, the Willis estate offers a rare opportunity to acquire pieces with complete provenance, documentation, and historical context.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            These works have been stored in museum-quality conditions and represent:
          </p>
          <ul className="text-gray-300 leading-relaxed mb-6 space-y-2 list-disc list-inside">
            <li>Major sculptural works from each creative period</li>
            <li>Preparatory drawings and paintings</li>
            <li>Exhibition pieces with institutional history</li>
            <li>Previously unexhibited masterworks</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-8">
            Each work is offered selectively to serious collectors, galleries, and institutions who understand the significance of acquiring art from a complete, preserved archive of an internationally recognized sculptor.
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Inquiry for acquisition:</strong> Contact information available upon request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
