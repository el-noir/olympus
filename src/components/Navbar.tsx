import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 text-foreground font-semibold text-lg">
            <span className="text-primary">⬡</span> Nexus
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-text-secondary hover:text-foreground transition-colors">Sign in</button>
          <button className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get started →
          </button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          <a href="#features" className="block text-sm text-text-secondary">Features</a>
          <a href="#how-it-works" className="block text-sm text-text-secondary">How it works</a>
          <a href="#faq" className="block text-sm text-text-secondary">FAQ</a>
          <a href="#" className="block text-sm text-text-secondary">Docs</a>
          <button className="w-full text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium mt-2">
            Get started →
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
