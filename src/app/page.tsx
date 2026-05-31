import HeroSection from "@/components/home/HeroSection";
import InnovativeSolutionsSection from "@/components/home/InnovativeSolutionsSection";
import ServingEveryIndustrySection from "@/components/home/ServingEveryIndustrySection";
import ApproachSection from "@/components/home/ApproachSection";
import ReadyToDeliverSection from "@/components/home/ReadyToDeliverSection";
import QualityComplianceSection from "@/components/home/QualityComplianceSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* --------------------- NEW FIXES --------------------- */
        /* Part 1: Hero Section Video Fix */
        [data-us-project],
        [data-us-project] > div,
        [data-us-project] canvas,
        [data-us-project] video {
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            margin: 0 !important;
            padding: 0 !important;
            object-fit: cover !important;
        }
      `}} />
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
