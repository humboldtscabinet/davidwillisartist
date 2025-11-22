import Image from "next/image";

export default function HeroSection() {
  return (
    <header
      id="hero"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center w-full">
        {/* Left side - Image */}
        <div className="relative aspect-square md:aspect-[3/4] w-full">
          <Image
            src="/images/placeholder-hero.jpg"
            alt="David Willis artwork"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right side - Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-brand">
            David Willis
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Five Decades of Sculptural Mastery and International Recognition
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            1938–2020
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Placeholder text about the artist&apos;s life and work. This section can include a brief introduction to David Willis&apos;s artistic journey, his unique approach to sculpture, and his lasting impact on the art world.
          </p>
          <a
            href="#gallery"
            className="inline-block px-8 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
            aria-label="View gallery"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </header>
  );
}
