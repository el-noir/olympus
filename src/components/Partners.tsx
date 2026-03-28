import { motion } from "framer-motion";

const Partners = () => (
  <section className="py-16 border-y border-border">
    <div className="container">
      <p className="text-center text-xs text-dim uppercase tracking-widest mb-8">Partnered with</p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-10 text-dim"
      >
        {["Y Combinator", "AWS", "Google Cloud", "LangChain"].map((name) => (
          <span key={name} className="text-sm font-medium tracking-wide text-muted-foreground/60 hover:text-muted-foreground transition-colors">
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Partners;
