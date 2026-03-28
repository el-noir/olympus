import { motion } from "framer-motion";

const Partners = () => (
  <section className="py-20">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif text-xl sm:text-2xl text-heading text-center mb-10"
      >
        Partnered with
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-3 max-w-3xl mx-auto border border-border rounded-xl overflow-hidden"
      >
        {["Y Combinator", "AWS", "Google Cloud"].map((name, i) => (
          <div
            key={name}
            className={`flex items-center justify-center py-6 text-body text-sm font-medium tracking-wide ${
              i < 2 ? "border-r border-border" : ""
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
