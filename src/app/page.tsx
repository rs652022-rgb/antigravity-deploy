import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import ApproachSection from '@/components/home/ApproachSection';

// Dynamically load below-the-fold sections for performance
const InnovativeSolutionsSection = dynamic(() => import('@/components/home/InnovativeSolutionsSection'));
const ReadyToDeliverSection = dynamic(() => import('@/components/home/ReadyToDeliverSection'));
const ServingEveryIndustrySection = dynamic(() => import('@/components/home/ServingEveryIndustrySection'));
const QualityComplianceSection = dynamic(() => import('@/components/home/QualityComplianceSection'));
const CTASection = dynamic(() => import('@/components/home/CTASection'));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      <HeroSection />
      <ApproachSection />
      <InnovativeSolutionsSection />
      <ReadyToDeliverSection />
      <ServingEveryIndustrySection />
      <QualityComplianceSection />
      <CTASection />
    </main>
  );
}
