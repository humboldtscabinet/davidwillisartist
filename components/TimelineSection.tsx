const timelineEvents = [
  {
    year: "1938",
    title: "Born in Greenfield, Massachusetts",
    description: "",
  },
  {
    year: "1964",
    title: "Marries Barbara Willis",
    description: "",
  },
  {
    year: "1965",
    title: "Begins sculpting; first exhibit in Italy",
    description: "",
  },
  {
    year: "1967",
    title: "Exhibits paintings and sculptures at Cosenza Art Gallery, Naples, Italy",
    description: "",
  },
  {
    year: "1970s",
    title: "Represented by Patton Gallery (Edinburgh) and Alwin Gallery (London)",
    description: "",
  },
  {
    year: "1978",
    title: "Begins representation by Galerie Heuser Langner, Frankfurt, Germany",
    description: "",
  },
  {
    year: "1979",
    title: "New Britain Museum of American Art acquires marble statue",
    description: "",
  },
  {
    year: "1986",
    title: "Third Okinawan exhibit at Okinawa Sheraton Hotel",
    description: "",
  },
  {
    year: "1988",
    title: "Major exhibitions in Naha, Japan (Mitsukoshi) and Taipei Fine Arts Museum",
    description: "",
  },
  {
    year: "1989",
    title: "Exhibits at Singapore National Museum and National Art Gallery, Kuala Lumpur",
    description: "",
  },
  {
    year: "1990s–2020",
    title: "Continues sculpting and painting daily in Florida",
    description: "",
  },
  {
    year: "2020",
    title: "Passes away, leaving a preserved estate collection",
    description: "",
  },
];

import Image from "next/image";

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
      <div className="relative w-full mt-12 rounded-lg overflow-hidden">
        <Image
          src="/images/timeline-footer.jpg"
          alt="David Willis coral sculpture"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
