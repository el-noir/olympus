import { motion } from "framer-motion";

const features = [
  {
    title: "Long running, auto-scaling sandboxes",
    desc: "Deploy agents that run for hours or days in isolated sandboxes. Infrastructure scales on demand so you can focus on building, not babysitting.",
    detail: (
      <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-[11px]">
        <div className="bg-surface-elevated rounded-lg px-4 py-3">
          <span className="text-body block mb-1">status</span>
          <span className="text-accent">● running · 2h 14m</span>
        </div>
        <div className="bg-surface-elevated rounded-lg px-4 py-3">
          <span className="text-body block mb-1">instances</span>
          <span className="text-heading">3 / auto</span>
        </div>
        <div className="bg-surface-elevated rounded-lg px-4 py-3">
          <span className="text-body block mb-1">memory</span>
          <span className="text-heading">312 MB</span>
        </div>
        <div className="bg-surface-elevated rounded-lg px-4 py-3">
          <span className="text-body block mb-1">billing</span>
          <span className="text-heading">$0.0042 / s</span>
        </div>
      </div>
    ),
  },
  {
    title: "MCP gateway",
    desc: "Skip the integration spaghetti. Our MCP gateway gives agents access to any tool or API while you control permissions from a single dashboard.",
    detail: (
      <div className="mt-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {["Slack", "GitHub", "Postgres", "Notion", "Gmail", "Stripe"].map((t) => (
            <span key={t} className="text-[11px] bg-surface-elevated text-heading px-3 py-1.5 rounded-lg">{t}</span>
          ))}
          <span className="text-[11px] text-body px-3 py-1.5">+38 more</span>
        </div>
        <p className="text-[11px] text-body">Permissions managed centrally · Zero credential sprawl</p>
      </div>
    ),
  },
  {
    title: "One click deploy",
    desc: "One click. Your LangGraph agent is live. Nexus manages provisioning, versioning, and execution behind the scenes.",
    detail: (
      <div className="mt-5 bg-surface-elevated rounded-lg p-4 font-mono text-[11px]">
        <p className="text-accent">$ nexus deploy</p>
        <p className="text-body mt-1">  Detected LangGraph agent</p>
        <p className="text-body">  Building sandbox image...</p>
        <p className="text-accent mt-1">  ✓ Deployed in 22s</p>
        <p className="text-heading">  → https://my-agent.nexus.run</p>
      </div>
    ),
  },
  {
    title: "Agent observability",
    desc: "Full visibility into every agent decision. Trace tool calls, inspect outputs, and debug in real time — not after something breaks.",
    detail: (
      <div className="mt-5 space-y-2 font-mono text-[11px]">
        {[
          { icon: "✓", label: "agent_start", meta: "+0ms", accent: true },
          { icon: "⬡", label: "llm_call", meta: "1.2k tok · +12ms", accent: false },
          { icon: "⚙", label: "tool: web_search", meta: "+840ms", accent: false },
          { icon: "✓", label: "agent_complete", meta: "+3.1s · $0.0018", accent: true },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-3 bg-surface-elevated rounded-lg px-4 py-2">
            <span className={s.accent ? "text-accent" : "text-heading"}>{s.icon}</span>
            <span className="text-heading">{s.label}</span>
            <span className="text-body ml-auto">{s.meta}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Model router",
    desc: "Use any model — GPT-4o, Gemini, Llama, or Claude. Swap the model without touching your LangGraph code. Route by cost, latency, or task type.",
    detail: (
      <div className="mt-5 space-y-2 font-mono text-[11px]">
        {[
          { task: "complex reasoning", model: "claude-opus-4" },
          { task: "fast tasks", model: "gpt-4o-mini" },
          { task: "code generation", model: "deepseek-v3" },
        ].map((r) => (
          <div key={r.task} className="flex justify-between bg-surface-elevated rounded-lg px-4 py-2.5">
            <span className="text-body">{r.task}</span>
            <span className="text-heading">{r.model}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const Features = () => (
  <section id="features" className="py-24 section-divider">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-heading text-center mb-16"
      >
        Features
      </motion.h2>

      {/* Top 2 cards side by side */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {features.slice(0, 2).map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-border rounded-xl bg-card p-7 hover:border-accent/20 transition-colors"
          >
            <h3 className="font-serif text-lg text-heading mb-2">{f.title}</h3>
            <p className="text-body text-sm leading-relaxed">{f.desc}</p>
            {f.detail}
          </motion.div>
        ))}
      </div>

      {/* Bottom 3 cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {features.slice(2).map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border border-border rounded-xl bg-card p-7 hover:border-accent/20 transition-colors"
          >
            <h3 className="font-serif text-lg text-heading mb-2">{f.title}</h3>
            <p className="text-body text-sm leading-relaxed">{f.desc}</p>
            {f.detail}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
