import { motion } from "framer-motion";

const BottomCTA = () => (
  <section className="py-28 section-divider">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading leading-tight tracking-tight">
          Push less.<br />Deploy more.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-heading text-background px-8 py-3 font-mono text-xs uppercase tracking-widest font-medium hover:bg-heading/90 transition-colors">
            Get Started →
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BottomCTA;
