import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-28 section-divider relative overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,hsl(210_60%_55%/0.05),transparent_70%)] pointer-events-none" />
    <div className="container max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-heading leading-tight">
          Start building<br /><span className="italic">powerful agents</span>
        </h2>
        <p className="text-body text-sm">Free during beta · No credit card required</p>
        <div>
          <button className="bg-heading text-background px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
