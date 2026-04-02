import { motion } from "framer-motion";

const Partners = () => (
  <section className="py-20">
    <div className="container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-body text-center mb-10"
      >
        Partnered with
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-4 max-w-4xl mx-auto border border-border overflow-hidden"
      >
        {["Y Combinator", "AWS", "Google Cloud", "LangChain"].map((name, i) => (
          <div
            key={name}
            className={`flex items-center justify-center py-7 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-heading hover:bg-card transition-colors ${
              i < 3 ? "sm:border-r border-b sm:border-b-0 border-border" : ""
            }`}
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Partners;
