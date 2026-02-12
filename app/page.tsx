import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArtisticVisionSection from "@/components/ArtisticVisionSection";
import TimelineSection from "@/components/TimelineSection";
import LegacySection from "@/components/LegacySection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ArtisticVisionSection />
      <LegacySection />
      <TimelineSection />
      <footer className="bg-surface-dark text-gray-300 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} David Willis. All rights reserved.</p>
      </footer>
    </main>
  );
}
