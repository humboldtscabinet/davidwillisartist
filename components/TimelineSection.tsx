const timelineEvents = [
  {
    year: "2024",
    title: "Solo Exhibition",
    description: "Major retrospective at Contemporary Art Museum",
  },
  {
    year: "2020",
    title: "International Recognition",
    description: "Featured in Art Basel and Venice Biennale",
  },
  {
    year: "2015",
    title: "Gallery Representation",
    description: "Signed with prestigious galleries in NYC and London",
  },
  {
    year: "2010",
    title: "MFA Graduation",
    description: "Master of Fine Arts from Rhode Island School of Design",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand">
        Timeline
      </h2>
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 pb-8 border-b border-gray-200 last:border-b-0"
          >
            <div className="md:w-24 flex-shrink-0">
              <span className="text-2xl font-bold text-accent">{event.year}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
