import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Nexus?",
    a: "Nexus is a deployment platform for LangGraph and LangChain agents. Import your project, run nexus deploy, and your agent is live with auto-scaling sandboxes, full observability, and an MCP tool gateway — all built in.",
  },
  {
    q: "Do I need to modify my LangGraph code?",
    a: "No. Nexus works with standard LangGraph code without modification. You keep full ownership of your codebase with zero vendor lock-in — remove Nexus and your agent still runs on vanilla LangGraph anywhere.",
  },
  {
    q: "Why use Nexus instead of deploying myself?",
    a: "Deploying LangGraph agents yourself means managing containers, configuring secure sandboxes, handling graph state persistence, building observability, and wiring up tool credentials. Nexus handles all of this with production-grade infrastructure and zero DevOps overhead.",
  },
  {
    q: "How does isolation and security work?",
    a: "Every agent run executes in its own isolated microVM — a separate kernel, network, and filesystem. One agent cannot affect another. Tool credentials are stored in an encrypted vault and injected at runtime, never exposed to your agent code directly.",
  },
  {
    q: "How much does Nexus cost?",
    a: "Nexus is free during our public beta. At general availability we'll switch to usage-based pricing — you pay only for the compute your agents actually use, billed per second. No seat fees. No per-agent fees.",
  },
  {
    q: "Which models does Nexus support?",
    a: "Any model LangGraph supports — Claude, GPT-4o, Gemini, Llama, Mistral, and any OpenAI-compatible endpoint. Swap models without touching your agent code.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs text-dim uppercase tracking-widest mb-3">FAQs</p>
        <h2 className="text-3xl font-bold">Common questions.</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="surface-card px-6 border-none">
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-text-secondary leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
