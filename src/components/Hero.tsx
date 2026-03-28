import { motion } from "framer-motion";

const TraceDemo = () => (
  <div className="surface-card p-4 space-y-3 text-xs font-mono max-w-sm mx-auto">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <span className="text-text-secondary">research-agent</span>
        <span className="inline-flex items-center gap-1 text-primary text-[10px] bg-primary/10 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Live
        </span>
      </div>
    </div>
    <p className="text-dim text-[10px] tracking-wide uppercase">Latest run — trace</p>
    {[
      { icon: "✓", label: "agent_start", meta: "+0ms", color: "text-primary" },
      { icon: "🧠", label: "llm_call", meta: "1.2k tok · +14ms", color: "text-foreground" },
      { icon: "⚙", label: "tool: web_search", meta: "+840ms", color: "text-foreground" },
      { icon: "🧠", label: "llm_call", meta: "890 tok · +1.1s", color: "text-foreground" },
      { icon: "✓", label: "agent_complete", meta: "+3.1s · $0.0018", color: "text-primary" },
    ].map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 + i * 0.15 }}
        className="flex items-center gap-3 py-1"
      >
        <span className="w-5 text-center">{step.icon}</span>
        <span className={step.color}>{step.label}</span>
        <span className="text-dim ml-auto">{step.meta}</span>
      </motion.div>
    ))}
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
    <div className="container relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs text-text-secondary border border-border rounded-full px-4 py-1.5 mx-auto"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Now in beta · LangGraph + LangChain
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          The deployment platform
          <br />
          <span className="text-gradient">for LangGraph agents</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Deploy LangGraph agents to production in seconds. One command.
          Auto-scaling sandboxes. Full observability built in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
            <span className="text-primary-foreground/70">⬡</span> Start deploying free
          </button>
          <button className="text-text-secondary text-sm hover:text-foreground transition-colors">
            Read the docs
          </button>
        </motion.div>

        <p className="text-dim text-xs">Free during beta · No credit card required</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-8"
        >
          <TraceDemo />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16 text-center"
      >
        {[
          { value: "<200ms", label: "Sandbox cold start" },
          { value: "1", label: "Command to deploy" },
          { value: "0", label: "Infra code you write" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-bold text-foreground font-mono">{stat.value}</p>
            <p className="text-xs text-dim mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
