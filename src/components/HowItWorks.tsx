import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    num: "1",
    tab: "IMPORT YOUR PROJECT",
    title: "Import Your Project",
    desc: "Import a LangGraph project from GitHub or generate a new agent from a prompt or template.",
  },
  {
    num: "2",
    tab: "ONE CLICK DEPLOY",
    title: "One click deploy",
    desc: "Click deploy or run nexus deploy. Your agent runs in an auto-scaling sandbox with built-in logging and observability.",
  },
  {
    num: "3",
    tab: "ITERATE",
    title: "Iterate",
    desc: "View tool traces, inspect output logs, and refine your agent using real production data. Infrastructure scales automatically.",
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
            Ship LangGraph agents<br />with one command
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-0 mb-10 border-b border-border">
          {steps.map((step, i) => (
            <button
              key={step.num}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-6 py-3 text-xs tracking-widest transition-colors border-b-2 ${
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
          <h3 className="font-serif text-2xl text-heading mb-4">{steps[active].title}</h3>
          <p className="text-body max-w-lg mx-auto leading-relaxed">{steps[active].desc}</p>
          {/* Placeholder for step image */}
          <div className="mt-8 rounded-xl border border-border bg-card dot-grid h-[240px] sm:h-[320px] flex items-center justify-center">
            <div className="font-mono text-sm text-body/40">
              {active === 0 && "→ nexus init or connect GitHub"}
              {active === 1 && "→ nexus deploy · Deployed in 22s"}
              {active === 2 && "→ Real-time traces & logs"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
