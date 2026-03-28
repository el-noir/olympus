import { motion } from "framer-motion";

const BottomCTA = () => (
  <section className="py-24 section-divider">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-heading leading-tight">
          Push less. Deploy more.
        </h2>
        <div>
          <button className="border border-border text-heading px-8 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BottomCTA;
