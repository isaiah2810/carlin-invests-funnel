import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { PainBenefits } from "@/components/sections/pain-benefits";
import { InlineCTA } from "@/components/sections/inline-cta";
import { OfferStack } from "@/components/sections/offer-stack";
import { Objections } from "@/components/sections/objections";
import { About } from "@/components/sections/about";
import { FAQs } from "@/components/sections/faqs";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <SocialProof />
      <SectionDivider />
      <PainBenefits />
      <InlineCTA id="cta-2" />
      <SectionDivider />
      <OfferStack />
      <SectionDivider />
      <Objections />
      <InlineCTA id="cta-3" />
      <SectionDivider />
      <About />
      <InlineCTA id="cta-4" />
      <SectionDivider />
      <FAQs />
      <SectionDivider />
      <FinalCTA />
      <Footer />
    </>
  );
}
