import Image from "next/image";
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
      <footer className="bg-surface-dark text-gray-300 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} David Willis. All rights reserved.</p>
      </footer>
    </main>
  );
}
