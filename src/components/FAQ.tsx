import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Olympus?",
    a: "Olympus is a deployment platform for LangGraph and LangChain agents. Import your project, run olympus deploy, and your agent is live with auto-scaling sandboxes, full observability, and an MCP tool gateway — all built in.",
  },
  {
    q: "Do I need to modify my LangGraph code?",
    a: "No. Olympus works with standard LangGraph code without modification. You keep full ownership of your codebase with zero vendor lock-in — remove Olympus and your agent still runs on vanilla LangGraph anywhere.",
  },
  {
    q: "Why use Olympus instead of deploying myself?",
    a: "Deploying LangGraph agents yourself means managing containers, configuring secure sandboxes, handling graph state persistence, building observability, and wiring up tool credentials. Olympus handles all of this with production-grade infrastructure and zero DevOps overhead.",
  },
  {
    q: "How does isolation and security work?",
    a: "Every agent run executes in its own isolated microVM — a separate kernel, network, and filesystem. One agent cannot affect another. Tool credentials are stored in an encrypted vault and injected at runtime, never exposed to your agent code directly.",
  },
  {
    q: "How much does Olympus cost?",
    a: "Olympus is free during our public beta. At general availability we'll switch to usage-based pricing — you pay only for the compute your agents actually use, billed per second. No seat fees. No per-agent fees.",
  },
  {
    q: "Which AI models does Olympus support?",
    a: "Any model LangGraph supports — Claude, GPT-4o, Gemini, Llama, Mistral, and any OpenAI-compatible endpoint. Swap models without touching your agent code.",
  },
  {
    q: "How do I get started?",
    a: "Install the CLI with npm install -g @olympus/cli, authenticate with olympus login, and deploy your LangGraph agent using olympus deploy. Your agent will immediately be accessible via REST API.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24 section-divider">
    <div className="container max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl sm:text-4xl text-heading text-center mb-14"
      >
        FAQs
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-accent/20"
          >
            <AccordionTrigger className="text-sm font-medium text-heading hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-body leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
