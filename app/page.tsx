import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArtisticVisionSection from "@/components/ArtisticVisionSection";
import TimelineSection from "@/components/TimelineSection";
import LegacySection from "@/components/LegacySection";
import ArtistGallerySection from "@/components/ArtistGallerySection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ArtisticVisionSection />
      <section className="px-4 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/Large%20Coral%20Outside.jpg"
              alt="Large coral sculpture displayed outdoors"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <LegacySection />
      <section id="flipbook" className="px-4 py-16 bg-white">
        <div className="max-w-[82.8rem] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-surface-dark mb-6">
            The Spirit of Asia in Coral
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Turn the pages in the viewer, or read the same catalog as photographs.
          </p>
          <p className="mb-8 text-center">
            <Link
              href="/taipei"
              className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Browse the Taipei Show pages
            </Link>
          </p>
          {/* On phones the flipbook loads its portrait "phone" template, so it needs a tall viewport; keep the 16:10 box on md+ screens. */}
          <div className="relative w-full h-[75svh] min-h-[24rem] md:h-auto md:min-h-0 md:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white">
            <iframe
              src="/images/spirit-of-asia-in-coral/index.html?embed=1"
              title="The Spirit of Asia in Coral flipbook"
              className="absolute inset-0 h-full w-full"
              loading="eager"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            If the embedded viewer does not load, open it directly{" "}
            <a
              href="/images/spirit-of-asia-in-coral/index.html?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              in a new tab
            </a>
            .
          </p>
        </div>
      </section>
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/Website%20Embed%20Photo%20Triangle.jpg"
              alt="David Willis sculpture with triangular form"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
              className="object-cover origin-center scale-90"
              priority
            />
          </div>
        </div>
      </section>
      <ArtistGallerySection />
      <TimelineSection />
    </main>
  );
}
