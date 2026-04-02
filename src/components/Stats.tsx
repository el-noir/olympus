import { motion } from "framer-motion";

const Stats = () => (
  <section className="py-24 section-divider">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading text-center leading-tight tracking-tight mb-16"
      >
        The <span className="gradient-text">easiest</span> way to deploy
        <br />
        agents with LangGraph
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border">
        {[
          { value: "<200ms", label: "Cold Start", sub: "Near-instant sandbox provisioning" },
          { value: "1", label: "Command to Deploy", sub: "From code to production" },
          { value: "Secure", label: "Isolated Runtime", sub: "Per-execution microVM isolation" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`text-center p-8 ${i < 2 ? "sm:border-r border-b sm:border-b-0 border-border" : ""}`}
          >
            <p className="font-mono text-3xl sm:text-4xl font-semibold text-heading">{stat.value}</p>
            <p className="text-heading font-mono text-xs uppercase tracking-widest mt-3">{stat.label}</p>
            <p className="text-body text-xs mt-1.5">{stat.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
