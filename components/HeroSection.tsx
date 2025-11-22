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
            American sculptor and painter whose career spanned five decades and four continents. His work, preserved intact by his family, represents an unprecedented opportunity to acquire pieces from a complete artistic archive.
          </p>
          <p className="text-base text-gray-600">
            Featured at Taipei Fine Arts Museum • Exhibited internationally across Europe and Asia • Specializing in coral sculpture and organic forms
          </p>
        </div>
      </div>
    </header>
  );
}
