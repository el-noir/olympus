import { motion } from "framer-motion";

const features = [
  {
    title: "Long running, auto-scaling sandboxes",
    desc: "Deploy agents that run for hours or days in isolated sandboxes. Infrastructure scales on demand so you can focus on building, not babysitting.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
        <rect x="4" y="8" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 20h4m4 0h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "MCP gateway",
    desc: "Skip the integration spaghetti. Our MCP gateway gives agents access to any tool or API while you control permissions from a single dashboard.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 6v28M6 20h28" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "One click deploy",
    desc: "One click. Your LangGraph agent is live. Nexus manages provisioning, versioning, and execution behind the scenes.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
        <path d="M20 6v20m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 30h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agent observability",
    desc: "Full visibility into every agent decision. Trace tool calls, inspect outputs, and debug in real time — not after something breaks.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
        <circle cx="20" cy="18" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 26l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Model router",
    desc: "Use any model — GPT-4o, Gemini, Llama, or Claude. Swap the model without touching your LangGraph code. Route by cost, latency, or task type.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
        <path d="M8 20h8m8 0h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 20l4-8 4 8-4 8-4-8z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const Features = () => (
  <section id="features" className="py-24 section-divider">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-heading">Features</h2>
      </motion.div>

      <div className="space-y-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-border rounded-xl bg-card p-8 sm:p-10 flex flex-col sm:flex-row gap-6 hover:border-accent/30 transition-colors group"
          >
            <div className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
              {f.icon}
            </div>
            <div>
              <h3 className="font-serif text-xl text-heading mb-3">{f.title}</h3>
              <p className="text-body text-sm leading-relaxed max-w-xl">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
