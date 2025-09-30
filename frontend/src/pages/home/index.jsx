import { HeroSection } from "../../components/HeroSection/HeroSection";
import { CulturalImpactSection } from "../../components/core/CulturalImpactSection";
import { SubirMemoria } from "../../components/core/SubirMemoria";

export function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <SubirMemoria />
      <CulturalImpactSection />
    </div>
  );
}
