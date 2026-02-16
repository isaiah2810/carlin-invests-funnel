import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { SneakPeek } from "@/components/sections/sneak-peek";
import { Proof } from "@/components/sections/proof";
import { PainBenefits } from "@/components/sections/pain-benefits";
import { Chapters } from "@/components/sections/chapters";
import { QuickWins } from "@/components/sections/quick-wins";
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
      <SneakPeek />
      <SectionDivider />
      <Proof />
      <SectionDivider />
      <PainBenefits />
      <SectionDivider />
      <Chapters />
      <SectionDivider />
      <QuickWins />
      <SectionDivider />
      <About />
      <SectionDivider />
      <FAQs />
      <SectionDivider />
      <FinalCTA />
      <Footer />
    </>
  );
}
