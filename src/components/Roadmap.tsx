import { motion } from "framer-motion";

const frameworks = [
  { name: "LangGraph", status: "live" },
  { name: "LangChain", status: "live" },
  { name: "CrewAI", status: "Q3 2026" },
  { name: "AutoGen", status: "Q3 2026" },
  { name: "Claude SDK", status: "Q4 2026" },
  { name: "OpenAI Agents", status: "Q4 2026" },
  { name: "LlamaIndex", status: "Q4 2026" },
  { name: "Custom HTTP", status: "always" },
];

const Roadmap = () => (
  <section className="py-24">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs text-dim uppercase tracking-widest mb-3">Roadmap</p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Starting with LangGraph.<br />
          <span className="text-text-secondary">Built for all of them.</span>
        </h2>
      </motion.div>

      <div className="surface-card divide-y divide-border">
        {frameworks.map((fw) => (
          <div key={fw.name} className="flex items-center justify-between px-6 py-4">
            <span className="font-medium text-foreground">{fw.name}</span>
            <span className={`text-xs font-mono px-3 py-1 rounded-full ${
              fw.status === "live"
                ? "bg-primary/10 text-primary"
                : fw.status === "always"
                ? "bg-secondary text-secondary-foreground"
                : "text-dim"
            }`}>
              {fw.status === "live" ? "● Live" : fw.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Roadmap;
