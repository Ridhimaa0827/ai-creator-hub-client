import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/common/Background.jsx";
import Stars from "../components/common/Stars.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import ToolsSection from "../components/sections/ToolsSection.jsx";
import DashboardPreview from "../components/sections/DashboardPreview.jsx";
import Features from "../components/sections/Features.jsx";
import CTA from "../components/sections/CTA.jsx";
import Footer from "../components/layout/Footer.jsx";
import About from "../components/sections/About.jsx";

export default function Home() {
  const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const section = params.get("section");

  if (section) {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  }
}, [location]);
  return (
    <>
      <Background />
      <Stars />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="tools">  
        <ToolsSection />
      </section>
      <section id="features"> 
        <Features />
      </section>  
      <DashboardPreview />
      <About />
      <CTA />
      <Footer />      
    </>
  );
}