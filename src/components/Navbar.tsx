import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 text-heading font-medium text-base tracking-tight">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Nexus
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-body">
          <a href="#" className="hover:text-heading transition-colors">Home</a>
          <a href="#features" className="hover:text-heading transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-heading transition-colors">How it works</a>
          <a href="#faq" className="hover:text-heading transition-colors">FAQ</a>
          <a href="#" className="hover:text-heading transition-colors">Docs</a>
        </div>

        <button className="hidden md:block text-sm border border-border text-heading px-5 py-2 rounded-lg hover:bg-secondary transition-colors">
          Get Started
        </button>

        <button className="md:hidden text-heading" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          <a href="#" className="block text-sm text-body">Home</a>
          <a href="#features" className="block text-sm text-body">Features</a>
          <a href="#how-it-works" className="block text-sm text-body">How it works</a>
          <a href="#faq" className="block text-sm text-body">FAQ</a>
          <button className="w-full text-sm border border-border text-heading px-4 py-2 rounded-lg mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
