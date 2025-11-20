const timelineEvents = [
  {
    year: "1938",
    title: "Born in Greenfield, Massachusetts",
    description: "",
  },
  {
    year: "1950s",
    title: "Early Foundations",
    description: "Early interests: singing, church choir, outdoors, family",
  },
  {
    year: "Late 1950s–Early 1960s",
    title: "Military Service",
    description: "Serves in the Marine Corps",
  },
  {
    year: "1964",
    title: "Marriage",
    description: "Marries Barbara Willis",
  },
  {
    year: "1960s–1970s",
    title: "Classical Voice Studies",
    description: "Scholarship to the Conservatory in Naples, Italy",
  },
  {
    year: "1970s",
    title: "Sculpting Begins",
    description: "Begins sculpting while living throughout Europe",
  },
  {
    year: "1970s–1980s",
    title: "European Exhibitions",
    description: "Exhibitions in Bad Kreuznach and Stuttgart, Germany",
  },
  {
    year: "1980s",
    title: "Global Artist",
    description: "Lives and creates in Italy, the UK, Japan, and Taiwan",
  },
  {
    year: "1988",
    title: "The Spirit of Asia in Coral",
    description: "Taipei Fine Arts Museum",
  },
  {
    year: "1990s–2020",
    title: "Florida Studio Years",
    description: "Continues sculpting and painting daily in Florida",
  },
  {
    year: "2020",
    title: "Legacy Preserved",
    description: "Passes away, leaving a preserved estate collection representing five decades of artistic work",
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
