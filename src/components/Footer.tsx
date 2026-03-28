const Footer = () => (
  <footer className="section-divider py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-heading font-medium mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Nexus
          </div>
          <p className="text-body text-xs leading-relaxed">
            The deployment platform<br />for LangGraph agents.
          </p>
        </div>

        <div>
          <p className="text-heading text-xs font-medium uppercase tracking-widest mb-4">Features</p>
          <ul className="space-y-2.5">
            {["Sandboxes", "MCP Gateway", "Observability", "One Click Deploy", "Model Router"].map((l) => (
              <li key={l}><a href="#features" className="text-body text-sm hover:text-heading transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-heading text-xs font-medium uppercase tracking-widest mb-4">Developers</p>
          <ul className="space-y-2.5">
            {["Docs", "CLI Reference", "GitHub", "Changelog"].map((l) => (
              <li key={l}><a href="#" className="text-body text-sm hover:text-heading transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-heading text-xs font-medium uppercase tracking-widest mb-4">Company</p>
          <ul className="space-y-2.5">
            {["About", "Careers", "Contact", "Privacy", "Terms"].map((l) => (
              <li key={l}><a href="#" className="text-body text-sm hover:text-heading transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 section-divider text-body text-xs">
        © 2026 Nexus, Inc. · Built for LangGraph developers.
      </div>
    </div>
  </footer>
);

export default Footer;
