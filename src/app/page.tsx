import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import InnovativeSolutionsSection from "@/components/home/InnovativeSolutionsSection";
import ServingEveryIndustrySection from "@/components/home/ServingEveryIndustrySection";
import ApproachSection from "@/components/home/ApproachSection";
import ReadyToDeliverSection from "@/components/home/ReadyToDeliverSection";
import QualityComplianceSection from "@/components/home/QualityComplianceSection";
import CTASection from "@/components/home/CTASection";

const FloatingLines = dynamic(() => import("./FloatingLines"), { ssr: false });

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Overrides absolutely all text to white on the homepage */
        body * { color: #ffffff !important; }
        
        /* Ensures buttons with white backgrounds remain legible */
        body .bg-white, body .bg-white * { 
          color: #000000 !important; 
        }

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
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={[10, 15, 20]}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
    </main>
    </>
  );
}
