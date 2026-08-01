import Background from "../components/common/Background.jsx";
import Stars from "../components/common/Stars.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import ToolsSection from "../components/sections/ToolsSection.jsx";
import DashboardPreview from "../components/sections/DashboardPreview.jsx";
import Features from "../components/sections/Features.jsx";
import CTA from "../components/sections/CTA.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {
  return (
    <>
      <Background />
      <Stars />
      <Navbar />
      <Hero />
      <ToolsSection />
      <DashboardPreview />
      <Features />
      <CTA />
      <Footer />

      
    </>
  );
}