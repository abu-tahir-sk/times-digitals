import Hero from "@/features/home/Hero";
import TrustedCompanies from "@/features/home/TrustedCompanies";
import ServicesGrid from "@/features/home/ServicesGrid";
import ProcessTimeline from "@/features/home/ProcessTimeline";
import PortfolioShowcase from "@/features/home/PortfolioShowcase";
import PricingPlans from "@/features/home/PricingPlans";
import Testimonials from "@/features/home/Testimonials";
import CTABanner from "@/features/home/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#C31621]/20 selection:text-[#ff4d5a]">
      <Hero />
      <TrustedCompanies />
      <ServicesGrid />
      <ProcessTimeline />
      <PortfolioShowcase />
      <Testimonials />
      <CTABanner />
      <PricingPlans />
    </main>
  );
}
