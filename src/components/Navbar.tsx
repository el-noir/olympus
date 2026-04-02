import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import olympusLogo from "@/assets/olympus-logo.png";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-heading font-mono text-sm tracking-tight">
          <img src={olympusLogo} alt="Olympus" className="w-5 h-5 invert" width={20} height={20} />
          <span className="font-semibold tracking-wide uppercase text-xs">Olympus</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-body">
          <a href="#" className="hover:text-heading transition-colors">Home</a>
          <a href="#features" className="hover:text-heading transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-heading transition-colors">How it works</a>
          <a href="#faq" className="hover:text-heading transition-colors">FAQ</a>
          <a href="#" className="hover:text-heading transition-colors">Docs</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="font-mono text-[11px] uppercase tracking-widest text-body hover:text-heading transition-colors px-4 py-2">
            Sign in
          </button>
          <button className="font-mono text-[11px] uppercase tracking-widest bg-accent text-accent-foreground px-5 py-2 font-medium hover:bg-accent/90 transition-colors">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-heading" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background p-5 space-y-3">
          <a href="#" className="block font-mono text-xs uppercase tracking-widest text-body py-1">Home</a>
          <a href="#features" className="block font-mono text-xs uppercase tracking-widest text-body py-1">Features</a>
          <a href="#how-it-works" className="block font-mono text-xs uppercase tracking-widest text-body py-1">How it works</a>
          <a href="#faq" className="block font-mono text-xs uppercase tracking-widest text-body py-1">FAQ</a>
          <div className="flex gap-3 mt-3">
            <button className="flex-1 font-mono text-xs uppercase tracking-widest text-body border border-border px-4 py-2.5">Sign in</button>
            <button className="flex-1 font-mono text-xs uppercase tracking-widest bg-accent text-accent-foreground px-4 py-2.5 font-medium">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
