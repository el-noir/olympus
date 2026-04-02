import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-28 section-divider relative overflow-hidden">
    <div className="container max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading leading-tight tracking-tight">
          Start building
          <br /><span className="gradient-text">powerful agents</span>
        </h2>
        <p className="font-mono text-xs uppercase tracking-widest text-body">Free during beta · No credit card required</p>
        <div>
          <button className="bg-accent text-accent-foreground px-8 py-3 font-mono text-xs uppercase tracking-widest font-medium hover:bg-accent/90 transition-colors">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
