const timelineEvents = [
  {
    year: "1938",
    title: "Born in Greenfield, Massachusetts",
    description: "",
  },
  {
    year: "1950s",
    title: "Early interests: singing, church choir, outdoors, family",
    description: "",
  },
  {
    year: "Late 1950s–Early 1960s",
    title: "Serves in the Marine Corps",
    description: "",
  },
  {
    year: "1964",
    title: "Marries Barbara Willis",
    description: "",
  },
  {
    year: "1960s–1970s",
    title: "Classical voice studies; scholarship to the Conservatory in Naples, Italy",
    description: "",
  },
  {
    year: "1970s",
    title: "Begins sculpting while living throughout Europe",
    description: "",
  },
  {
    year: "1970s–1980s",
    title: "Exhibitions in Bad Kreuznach and Stuttgart, Germany",
    description: "",
  },
  {
    year: "1980s",
    title: "Lives and creates in Italy, the UK, Japan, and Taiwan",
    description: "",
  },
  {
    year: "1988",
    title: "The Spirit of Asia in Coral, Taipei Fine Arts Museum",
    description: "",
  },
  {
    year: "1990s–2020",
    title: "Continues sculpting and painting daily in Florida",
    description: "",
  },
  {
    year: "2020",
    title: "Passes away, leaving a preserved estate collection representing five decades of artistic work",
    description: "",
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
