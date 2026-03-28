import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "📦",
    title: "Import your project",
    desc: "Connect your GitHub repo or run nexus init in any LangGraph project. We detect your framework and entrypoint automatically.",
  },
  {
    num: "02",
    icon: "🚀",
    title: "One command deploy",
    desc: "Run nexus deploy. Your agent runs in an isolated auto-scaling sandbox with built-in logging and observability in under 30 seconds.",
  },
  {
    num: "03",
    icon: "🔍",
    title: "Iterate with real data",
    desc: "View tool traces, inspect output logs, and refine your agent using real production data. Push a new version — zero downtime.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs text-dim uppercase tracking-widest mb-3">How it works</p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          From notebook<br />to production.
        </h2>
        <p className="text-text-secondary mt-4 max-w-lg mx-auto">
          Nexus wraps your existing LangGraph agent. No code changes. No config files. No DevOps.
        </p>
      </motion.div>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="surface-card p-6 sm:p-8 flex gap-6"
          >
            <div className="flex-shrink-0">
              <span className="text-dim font-mono text-xs">{step.num}</span>
              <p className="text-2xl mt-1">{step.icon}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-text-secondary text-sm mt-2 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
