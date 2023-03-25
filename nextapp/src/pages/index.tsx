import PageHeader from "@/components/PageHeader";
import CarouselSection from "@/components/sections/CarouselSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import FactsSection from "@/components/sections/FactsSection";
import FooterSection from "@/components/sections/FooterSection";
import GutterSection from "@/components/sections/GutterSection";
import NavigationSection from "@/components/sections/NavigationSection";
import PartnerLogosSection from "@/components/sections/PartnerLogosSection";
import QuotesSection from "@/components/sections/QuotesSection";

export default function Home() {
  return (
    <>
      <PageHeader title="Welcome" />
      <NavigationSection />
      <CarouselSection />
      <DifferentiatorSection />
      <PartnerLogosSection />
      <FactsSection />
      <QuotesSection />
      <FooterSection />
      <GutterSection />
    </>
  );
}
