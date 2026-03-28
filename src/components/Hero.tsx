import { motion } from "framer-motion";
import heroImage from "@/assets/hero-olympus.jpg";

const Hero = () => (
  <section className="relative pt-32 pb-0 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,hsl(210_60%_55%/0.07),transparent_70%)] pointer-events-none" />

    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-xs text-body border border-border/60 rounded-full px-4 py-1.5 mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Now in beta · LangGraph + LangChain
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="font-serif text-4xl sm:text-5xl md:text-[4.5rem] font-medium text-heading leading-[1.08] tracking-tight"
      >
        The deployment platform for
        <br />
        <span className="gradient-text italic">LangGraph agents</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-body text-base sm:text-lg mt-7 max-w-lg mx-auto leading-relaxed"
      >
        Deploy LangGraph agents to production in seconds.
        One command. Auto-scaling. Full observability.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
      >
        <button className="bg-heading text-background px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          Start deploying free →
        </button>
        <button className="text-body text-sm hover:text-heading transition-colors border border-border px-7 py-3 rounded-lg">
          Read the docs
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-body/50 text-xs mt-4"
      >
        Free during beta · No credit card required
      </motion.p>
    </div>

    {/* Hero image */}
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
      className="container mt-16 relative z-10"
    >
      <div className="relative rounded-2xl overflow-hidden border border-border/60 glow-card">
        <img
          src={heroImage}
          alt="Mount Olympus temple dissolving into digital constellation"
          className="w-full h-[300px] sm:h-[440px] object-cover object-center"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 flex flex-col items-center">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-heading mb-5 text-center">
            One command to production
          </p>
          <div className="font-mono text-sm bg-card/80 backdrop-blur-md border border-border/60 px-8 py-3 rounded-xl text-heading tracking-wide">
            <span className="text-accent mr-2">$</span>olympus deploy
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
