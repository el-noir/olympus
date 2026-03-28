import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-24 bg-surface/30">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">Ship your first agent today.</h2>
        <p className="text-text-secondary">
          Free during beta. No credit card required. Agent live in under 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
            Get started free →
          </button>
          <button className="text-text-secondary text-sm hover:text-foreground transition-colors">
            Read the docs
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
