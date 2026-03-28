import { motion } from "framer-motion";

const lines = [
  { prompt: true, text: "npm install -g @nexus/cli" },
  { prompt: true, text: "nexus login" },
  { text: " ✓ Authenticated as you@company.com", color: "text-primary" },
  { prompt: true, text: "nexus deploy" },
  { text: " Detected LangGraph agent (agent.py)", color: "text-dim" },
  { text: " Building sandbox image...", color: "text-dim" },
  { text: " Provisioning microVM...", color: "text-dim" },
  { text: " Configuring autoscaler...", color: "text-dim" },
  { text: " ✓ Deployed in 22s", color: "text-primary" },
  { text: " → https://my-agent.nexus.run", color: "text-foreground" },
];

const DeploySection = () => (
  <section className="py-24 bg-surface/30">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Deploy in<br /><span className="text-gradient">under 2 minutes.</span>
        </h2>
        <p className="text-text-secondary mt-4">
          No Kubernetes configs. No Docker files. No cloud console. Just your agent code and one command.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="surface-card overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-muted" />
            <span className="w-3 h-3 rounded-full bg-muted" />
            <span className="w-3 h-3 rounded-full bg-muted" />
          </div>
          <span className="text-[11px] text-dim font-mono ml-2">~/my-agent — bash</span>
        </div>
        <div className="p-5 font-mono text-xs sm:text-sm space-y-1">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={line.color || "text-foreground"}
            >
              {line.prompt && <span className="text-primary">❯ </span>}
              {line.text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default DeploySection;
