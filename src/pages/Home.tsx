import Navbar from "../components/site/Navbar";
import Hero from "../components/sections/Hero";
import IndustryStrip from "../components/sections/IndustryStrip";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import WhySection from "../components/sections/WhySection";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import useReveal from "../hooks/useReveal";

export default function Home() {
   useReveal();
  return (
 <>
  <Navbar />
  <Hero />
  <IndustryStrip />
  <About />
  <Services />
 <WhySection />
 <Portfolio />
 <Process />
 <CTA />
 <Footer />
</>
)
};