import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Long-running, auto-scaling sandboxes",
    desc: "Deploy agents that run for hours or days in isolated sandboxes. Infrastructure scales on demand so you can focus on building.",
    demo: (
      <div className="mt-4 space-y-2 font-mono text-[11px]">
        <div className="flex justify-between"><span className="text-dim">agent</span><span className="text-primary">● running · 2h 14m</span></div>
        <div className="flex justify-between"><span className="text-dim">instances</span><span className="text-foreground">3 / auto</span></div>
        <div className="flex justify-between"><span className="text-dim">memory</span><span className="text-foreground">312 MB</span></div>
        <div className="flex justify-between"><span className="text-dim">billing</span><span className="text-foreground">$0.0042 / sec-run</span></div>
      </div>
    ),
  },
  {
    icon: "🔌",
    title: "MCP gateway",
    desc: "Skip the integration spaghetti. Our MCP gateway gives agents access to any tool or API while you control permissions from a single dashboard.",
    demo: (
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {["Slack", "GitHub", "Postgres", "Notion", "Gmail"].map((t) => (
            <span key={t} className="text-[10px] bg-secondary text-secondary-foreground px-2 py-1 rounded">{t}</span>
          ))}
          <span className="text-[10px] text-dim px-2 py-1">+38 more</span>
        </div>
        <p className="text-[10px] text-dim mt-3">Permissions managed centrally · Zero credential sprawl</p>
      </div>
    ),
  },
  {
    icon: "📡",
    title: "Agent observability",
    desc: "Full visibility into every agent decision. Trace tool calls, inspect outputs, and debug in real time.",
    demo: (
      <div className="mt-4 space-y-1.5 font-mono text-[11px]">
        <p><span className="text-primary">✓</span> <span className="text-dim">agent_start +0ms</span></p>
        <p><span className="text-foreground">⬡</span> <span className="text-dim">llm_call +12ms · 1.2k tok</span></p>
        <p><span className="text-foreground">⚙</span> <span className="text-dim">tool_call +840ms</span></p>
        <p><span className="text-primary">✓</span> <span className="text-dim">complete +3.1s · $0.0018</span></p>
      </div>
    ),
  },
  {
    icon: "🔀",
    title: "Model router",
    desc: "Use any model — GPT-4o, Gemini, Llama, or Claude. Swap the model without touching your LangGraph code. Route by cost, latency, or task type.",
    demo: (
      <div className="mt-4 space-y-2 font-mono text-[11px]">
        {[
          { task: "complex reasoning", model: "claude-opus-4" },
          { task: "fast tasks", model: "gpt-4o-mini" },
          { task: "code generation", model: "deepseek-v3" },
        ].map((r) => (
          <div key={r.task} className="flex justify-between">
            <span className="text-dim">{r.task}</span>
            <span className="text-foreground">{r.model}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const Features = () => (
  <section id="features" className="py-24 bg-surface/30">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs text-dim uppercase tracking-widest mb-3">Features</p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Everything your agent<br />needs in production.
        </h2>
        <p className="text-text-secondary mt-4 max-w-lg mx-auto">
          The infrastructure primitives every team ends up rebuilding — built in and on by default.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="surface-card p-6 hover:border-primary/30 transition-colors"
          >
            <p className="text-2xl mb-3">{f.icon}</p>
            <h3 className="font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">{f.desc}</p>
            {f.demo}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
