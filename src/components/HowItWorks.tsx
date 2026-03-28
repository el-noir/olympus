import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    num: "1",
    tab: "IMPORT YOUR PROJECT",
    title: "Import Your Project",
    desc: "Import a LangGraph project from GitHub or run olympus init in any project. We detect your framework and entrypoint automatically.",
    terminal: (
      <div className="font-mono text-xs sm:text-sm space-y-1 text-left">
        <p><span className="text-accent">$</span> olympus init</p>
        <p className="text-body">  Detected LangGraph agent (agent.py)</p>
        <p className="text-body">  Found 3 tool definitions</p>
        <p className="text-accent">  ✓ Project initialized</p>
      </div>
    ),
  },
  {
    num: "2",
    tab: "ONE CLICK DEPLOY",
    title: "One click deploy",
    desc: "Click deploy or run olympus deploy. Your agent runs in an auto-scaling sandbox with built-in logging and observability.",
    terminal: (
      <div className="font-mono text-xs sm:text-sm space-y-1 text-left">
        <p><span className="text-accent">$</span> olympus deploy</p>
        <p className="text-body">  Building sandbox image...</p>
        <p className="text-body">  Provisioning microVM...</p>
        <p className="text-body">  Configuring autoscaler...</p>
        <p className="text-accent">  ✓ Deployed in 22s</p>
        <p className="text-heading">  → https://my-agent.olympus.run</p>
      </div>
    ),
  },
  {
    num: "3",
    tab: "ITERATE",
    title: "Iterate with real data",
    desc: "View tool traces, inspect output logs, and refine your agent using real production data. Push new versions with zero downtime.",
    terminal: (
      <div className="font-mono text-xs sm:text-sm space-y-1.5 text-left">
        <p className="text-body">  Latest run — trace</p>
        <p><span className="text-accent">✓</span> agent_start <span className="text-body">+0ms</span></p>
        <p><span className="text-heading">⬡</span> llm_call <span className="text-body">1.2k tok · +14ms</span></p>
        <p><span className="text-heading">⚙</span> tool: web_search <span className="text-body">+840ms</span></p>
        <p><span className="text-accent">✓</span> agent_complete <span className="text-body">+3.1s · $0.0018</span></p>
      </div>
    ),
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="py-24 section-divider">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-heading leading-tight">
            Ship LangGraph agents
            <br />
            <span className="italic">with one command</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-0 mb-10 border-b border-border overflow-x-auto">
          {steps.map((step, i) => (
            <button
              key={step.num}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 text-[10px] sm:text-xs tracking-widest transition-colors border-b-2 whitespace-nowrap ${
                active === i
                  ? "text-heading border-accent"
                  : "text-body border-transparent hover:text-heading"
              }`}
            >
              <span className="font-mono">{step.num}.</span>
              {step.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h3 className="font-serif text-2xl text-heading mb-3">{steps[active].title}</h3>
          <p className="text-body max-w-lg mx-auto leading-relaxed text-sm">{steps[active].desc}</p>

          {/* Terminal mockup */}
          <div className="mt-8 rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-muted" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted" />
              </div>
              <span className="text-[10px] text-body font-mono ml-2">~/my-agent — bash</span>
            </div>
            <div className="p-6 sm:p-8">
              {steps[active].terminal}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
