export default function HeroSection() {
  return (
    <header
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand to-accent text-white"
    >
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          David Willis
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Contemporary Artist & Creator
        </p>
        <a
          href="#gallery"
          className="inline-block px-8 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="View gallery"
        >
          Explore My Work
        </a>
      </div>
    </header>
  );
}
