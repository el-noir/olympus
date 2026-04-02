import { motion } from "framer-motion";
import heroImage from "@/assets/hero-olympus.jpg";

const Hero = () => (
  <section className="relative pt-28 pb-0 overflow-hidden">
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-body border border-border px-4 py-1.5 mb-8"
      >
        <span className="w-1.5 h-1.5 bg-accent" />
        Now in beta · LangGraph + LangChain
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-[4.5rem] font-bold text-heading leading-[1.05] tracking-tight"
      >
        The deployment platform for
        <br />
        <span className="gradient-text">LangGraph agents</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-body text-sm sm:text-base mt-7 max-w-lg leading-relaxed"
      >
        Deploy LangGraph agents to production in seconds.
        One command. Auto-scaling. Full observability.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start gap-3 mt-10"
      >
        <button className="bg-heading text-background px-7 py-3 font-mono text-xs uppercase tracking-widest font-medium hover:bg-heading/90 transition-colors">
          Start deploying free →
        </button>
        <button className="text-body font-mono text-xs uppercase tracking-widest hover:text-heading transition-colors border border-border px-7 py-3">
          Read the docs
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mt-4"
      >
        Free during beta · No credit card required
      </motion.p>
    </div>

    {/* Hero image */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="container mt-16 relative z-10"
    >
      <div className="relative border border-border overflow-hidden">
        <img
          src={heroImage}
          alt="Mount Olympus temple dissolving into digital constellation"
          className="w-full h-[300px] sm:h-[440px] object-cover object-center"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 flex flex-col items-center">
          <p className="text-lg sm:text-xl md:text-2xl text-heading font-semibold mb-5 text-center tracking-tight">
            One command to production
          </p>
          <div className="font-mono text-sm bg-background/90 border border-border px-8 py-3 text-heading tracking-wide">
            <span className="text-accent mr-2">$</span>olympus deploy<span className="animate-blink ml-0.5">_</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
