import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import DeploySection from "@/components/DeploySection";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Partners />
    <HowItWorks />
    <Stats />
    <Marquee />
    <DeploySection />
    <Features />
    <CTA />
    <FAQ />
    <BottomCTA />
    <Footer />
  </div>
);

export default Index;
