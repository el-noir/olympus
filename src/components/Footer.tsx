const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-semibold text-foreground flex items-center gap-2">
            <span className="text-primary">⬡</span> Nexus
          </p>
          <p className="text-xs text-dim mt-2 leading-relaxed">
            The deployment platform for LangGraph agents.
          </p>
        </div>
        {[
          {
            title: "Features",
            links: ["Sandboxes", "MCP Gateway", "Observability", "Model Router"],
          },
          {
            title: "Developers",
            links: ["Docs", "CLI Reference", "GitHub", "Changelog"],
          },
          {
            title: "Company",
            links: ["About", "Careers", "Contact", "Privacy"],
          },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-xs text-dim uppercase tracking-widest mb-4">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-border text-xs text-dim">
        © 2026 Nexus, Inc. · Built for LangGraph developers.
      </div>
    </div>
  </footer>
);

export default Footer;
