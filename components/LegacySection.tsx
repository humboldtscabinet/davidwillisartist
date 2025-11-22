export default function LegacySection() {
  return (
    <section id="legacy" className="py-20 px-4 bg-surface-dark text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Philosophy & Legacy
        </h2>
        
        <div className="mb-12">
          <blockquote className="italic text-lg md:text-xl leading-relaxed border-l-4 border-accent pl-6">
            I try to interpret an individual piece of coral to let the inner beauty be revealed and am consciously adopting the Eastern precept of economy of line.
          </blockquote>
          <p className="text-gray-400 text-sm mt-4 pl-6">— David Willis</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            The Estate Collection
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            David Willis&rsquo;s family has retained his life&rsquo;s work—an extraordinary archive spanning 1965–2020. The Willis estate offers a rare opportunity to acquire pieces with complete provenance, documentation, and historical context from a career that began in Italy and spanned galleries across Europe, Asia, and North America.
          </p>
          <ul className="text-gray-300 leading-relaxed mb-6 space-y-2 list-disc list-inside">
            <li>Major sculptural works from each creative period</li>
            <li>Drawings and paintings</li>
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
