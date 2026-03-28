import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import DeploySection from "@/components/DeploySection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Partners />
    <HowItWorks />
    <Features />
    <Roadmap />
    <DeploySection />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

export default Index;
