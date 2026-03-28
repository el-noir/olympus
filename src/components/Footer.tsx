const Footer = () => (
  <footer className="section-divider py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-heading font-medium mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 12L3 7m9 5l9-5m-9 5v10" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="font-serif text-lg">Olympus</span>
          </div>
          <p className="text-body text-xs leading-relaxed">
            The deployment platform
            <br />
            for LangGraph agents.
          </p>
        </div>

        <div>
          <p className="text-heading text-xs font-medium uppercase tracking-widest mb-4">Features</p>
          <ul className="space-y-2.5">
            {["Sandboxes", "MCP Gateway", "Observability", "One Click Deploy", "Model Router"].map((l) => (
              <li key={l}>
                <a href="#features" className="text-body text-sm hover:text-heading transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-heading text-xs font-medium uppercase tracking-widest mb-4">Developers</p>
          <ul className="space-y-2.5">
            {["Docs", "CLI Reference", "GitHub", "Changelog"].map((l) => (
              <li key={l}>
                <a href="#" className="text-body text-sm hover:text-heading transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-heading text-xs font-medium uppercase tracking-widest mb-4">Company</p>
          <ul className="space-y-2.5">
            {["About", "Careers", "Contact", "Privacy", "Terms"].map((l) => (
              <li key={l}>
                <a href="#" className="text-body text-sm hover:text-heading transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 section-divider text-body text-xs">
        © 2026 Olympus, Inc. · Built for LangGraph developers.
      </div>
    </div>
  </footer>
);

export default Footer;
