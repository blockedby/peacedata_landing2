import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FooterSection from "@/components/sections/FooterSection";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main id="top" className="relative z-[1]">
        <HeroSection />
        <FeaturesSection />
        <PortfolioSection />
        <ServicesSection />
        <FooterSection />
      </main>
      <ThemeSwitcher />
    </>
  );
}
