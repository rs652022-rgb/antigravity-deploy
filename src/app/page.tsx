import HeroSection from "@/components/home/HeroSection";
import InnovativeSolutionsSection from "@/components/home/InnovativeSolutionsSection";
import ServingEveryIndustrySection from "@/components/home/ServingEveryIndustrySection";
import ApproachSection from "@/components/home/ApproachSection";
import ReadyToDeliverSection from "@/components/home/ReadyToDeliverSection";
import QualityComplianceSection from "@/components/home/QualityComplianceSection";
import CTASection from "@/components/home/CTASection";
import { HomeBodyClass } from "@/components/home/HomeBodyClass";

export default function Home() {
  return (
    <>
      <HomeBodyClass />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <InnovativeSolutionsSection />
        <ServingEveryIndustrySection />
        <ApproachSection />
        <ReadyToDeliverSection />
        <QualityComplianceSection />
        <CTASection />
      </main>
    </>
  );
}
