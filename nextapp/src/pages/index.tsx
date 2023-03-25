import PageHeader from "@/components/PageHeader";
import CarouselSection from "@/components/sections/index-page/CarouselSection";
import DifferentiatorSection from "@/components/sections/index-page/DifferentiatorSection";
import FactsSection from "@/components/sections/index-page/FactsSection";
import PartnerLogosSection from "@/components/sections/index-page/PartnerLogosSection";
import QuotesSection from "@/components/sections/index-page/QuotesSection";

export default function Home() {
  return (
    <>
      <PageHeader title="Welcome" description="" />
      <CarouselSection />
      <DifferentiatorSection />
      <PartnerLogosSection />
      <FactsSection />
      <QuotesSection />
    </>
  );
}
