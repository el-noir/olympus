import { motion } from "framer-motion";

const Stats = () => (
  <section className="py-24 section-divider">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-heading text-center leading-tight mb-16"
      >
        The <span className="italic">easiest</span> way to deploy<br />
        agents with LangGraph
      </motion.h2>

      <div className="grid grid-cols-3 gap-6">
        {[
          { value: "<200ms", label: "Cold Start" },
          { value: "1", label: "Command to Deploy" },
          { value: "Secure", label: "Isolated Runtime" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center border border-border rounded-xl p-8 bg-card"
          >
            <p className="font-serif text-3xl sm:text-4xl text-heading">{stat.value}</p>
            <p className="text-body text-sm mt-3">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
