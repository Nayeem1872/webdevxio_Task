import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import FAQSection from "./components/FAQSection";
import WhatWeDo from "./components/WhatWeDo";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ClientLogos />
      {/* <WhatWeDoSection /> */}

      <AboutSection />
      <WhatWeDo />
      <PortfolioSection />
      <FAQSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
