import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    "Research Agents", "Code Agents", "DevOps Agents",
    "Data Agents", "Finance Agents", "Customer Support Agents",
  ];
  const doubled = [...items, ...items];

  return (
    <section className="py-12 section-divider overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="mx-8 text-lg sm:text-xl font-serif text-body/40 hover:text-heading transition-colors cursor-default"
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
