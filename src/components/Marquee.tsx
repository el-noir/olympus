import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    "Research Agents",
    "Code Agents",
    "DevOps Agents",
    "Data Agents",
    "Finance Agents",
    "Customer Support Agents",
    "Security Agents",
    "Sales Agents",
  ];
  const doubled = [...items, ...items];

  return (
    <section className="py-14 section-divider overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="mx-6 sm:mx-10 font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-heading transition-colors cursor-default select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
