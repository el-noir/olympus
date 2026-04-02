import { motion } from "framer-motion";

const DeploySection = () => (
  <section className="py-24 section-divider">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading leading-tight tracking-tight">
          Deploy your first agent
          <br />
          in <span className="gradient-text">seconds</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-0 border border-border">
        {[
          { icon: "⚡", title: "Deploy automatically", desc: "From git push or with our CLI" },
          { icon: "🔒", title: "Isolated sandboxes", desc: "Per-execution microVM isolation" },
          { icon: "📡", title: "Full observability", desc: "Traces, logs, and metrics for every run" },
          { icon: "🛡️", title: "Secure by default", desc: "Encrypted vault for credentials" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`p-6 hover:bg-surface-elevated transition-colors ${
              i < 2 ? "border-b border-border" : ""
            } ${i % 2 === 0 ? "sm:border-r border-border" : ""}`}
          >
            <span className="text-lg mb-2 block">{item.icon}</span>
            <p className="text-heading text-sm font-medium">{item.title}</p>
            <p className="text-body text-xs mt-1.5">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeploySection;
