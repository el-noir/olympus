const Footer = () => (
  <footer className="section-divider py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-heading font-mono mb-3">
            <span className="text-accent font-semibold text-base">//</span>
            <span className="font-semibold text-xs uppercase tracking-widest">Olympus</span>
          </div>
          <p className="text-body text-xs leading-relaxed">
            The deployment platform
            <br />
            for LangGraph agents.
          </p>
        </div>

        <div>
          <p className="text-heading font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Features</p>
          <ul className="space-y-2.5">
            {["Sandboxes", "MCP Gateway", "Observability", "One Click Deploy", "Model Router"].map((l) => (
              <li key={l}>
                <a href="#features" className="text-body text-sm hover:text-heading transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-heading font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Developers</p>
          <ul className="space-y-2.5">
            {["Docs", "CLI Reference", "GitHub", "Changelog"].map((l) => (
              <li key={l}>
                <a href="#" className="text-body text-sm hover:text-heading transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-heading font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Company</p>
          <ul className="space-y-2.5">
            {["About", "Careers", "Contact", "Privacy", "Terms"].map((l) => (
              <li key={l}>
                <a href="#" className="text-body text-sm hover:text-heading transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 section-divider text-body font-mono text-[10px] uppercase tracking-widest">
        © 2026 Olympus, Inc. · Built for LangGraph developers.
      </div>
    </div>
  </footer>
);

export default Footer;
