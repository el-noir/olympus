import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-heading font-medium text-base tracking-tight">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M12 12L3 7m9 5l9-5m-9 5v10" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="font-serif text-lg">Olympus</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-body">
          <a href="#" className="hover:text-heading transition-colors">Home</a>
          <a href="#features" className="hover:text-heading transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-heading transition-colors">How it works</a>
          <a href="#faq" className="hover:text-heading transition-colors">FAQ</a>
          <a href="#" className="hover:text-heading transition-colors">Docs</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-[13px] text-body hover:text-heading transition-colors px-4 py-2">
            Sign in
          </button>
          <button className="text-[13px] bg-heading text-background px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-heading" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl p-5 space-y-3">
          <a href="#" className="block text-sm text-body py-1">Home</a>
          <a href="#features" className="block text-sm text-body py-1">Features</a>
          <a href="#how-it-works" className="block text-sm text-body py-1">How it works</a>
          <a href="#faq" className="block text-sm text-body py-1">FAQ</a>
          <div className="flex gap-3 mt-3">
            <button className="flex-1 text-sm text-body border border-border px-4 py-2.5 rounded-lg">Sign in</button>
            <button className="flex-1 text-sm bg-heading text-background px-4 py-2.5 rounded-lg font-medium">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
