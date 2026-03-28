import { motion } from "framer-motion";
import heroHands from "@/assets/hero-hands.jpg";

const Hero = () => (
  <section className="relative pt-28 pb-0 overflow-hidden">
    {/* Heading */}
    <div className="container relative z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium text-heading leading-[1.1] tracking-tight"
      >
        The deployment platform for<br />
        <span className="gradient-text">LangGraph agents</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-body text-base sm:text-lg mt-6 max-w-xl mx-auto"
      >
        Deploy LangGraph agents to production in seconds.
      </motion.p>

      {/* Human / Agent pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="inline-flex items-center border border-border rounded-full mt-8 overflow-hidden"
      >
        <span className="flex items-center gap-2 px-5 py-2 text-sm text-heading bg-secondary">
          <span className="w-2 h-2 rounded-full bg-heading" />
          Human
        </span>
        <span className="flex items-center gap-2 px-5 py-2 text-sm text-body">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Agent
        </span>
      </motion.div>
    </div>

    {/* Hero card with hands */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.9 }}
      className="container mt-12 relative z-10"
    >
      <div className="relative rounded-2xl overflow-hidden border border-border dot-grid bg-card">
        <img
          src={heroHands}
          alt="Digital hands reaching toward each other"
          className="w-full h-[280px] sm:h-[360px] object-cover mix-blend-lighten opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-heading mb-4">
            One command to production
          </p>
          <div className="font-mono text-sm bg-secondary/80 backdrop-blur border border-border px-6 py-2.5 rounded-lg text-heading">
            nexus deploy
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
