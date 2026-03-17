import Link from "next/link";

const stats = [
  { value: "550K+", label: "lines of code shipped", note: "Change Radar alone." },
  { value: "8 months", label: "to build an enterprise SaaS solo", note: "From zero to production." },
  { value: "7+", label: "open source repositories", note: "Public work that ships." },
  { value: "4 repos", label: "shipped in a single day", note: "Today!" },
];

const services = [
  "AI Agent Development — OpenClaw, LangChain, LangGraph",
  "AI Employees & Automation — replace SaaS with intelligent agents",
  "Full-Stack AI Applications — RAG, multi-agent systems, dashboards",
  "MCP & Tool Integration — connect AI to any business system",
];

const stack = {
  Languages: ["TypeScript", "Python", "Rust", "SQL", "Bash"],
  Frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  Backend: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Redis", "SQLite"],
  "AI/ML": ["LangChain", "LangGraph", "LangSmith", "OpenAI API", "Claude API", "Anthropic", "ChromaDB", "pgvector", "RAG", "MCP Protocol", "OpenClaw", "Multi-Agent Systems"],
  Infrastructure: ["Docker", "Vercel", "AWS", "GitHub Actions", "CI/CD"],
  Tools: ["Git", "Linux", "OpenClaw", "Himalaya"],
};

const projects = [
  {
    title: "Change Radar",
    summary: "Enterprise PMO platform, 550K LOC.",
    details:
      "8 AI engines, multi-tenant SaaS architecture, and SOC 2-grade security built solo in 8 months.",
    tech: ["Next.js", "Python", "PostgreSQL", "Redis", "8 AI engines"],
    privateLabel: "Enterprise - available on request",
    featured: true,
  },
  {
    title: "AI Due Diligence Agent",
    summary: "Multi-agent system for automated business analysis.",
    details:
      "Four specialised AI agents analyse documents in parallel with human checkpoints, RAG, and LangSmith tracing.",
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "Next.js", "ChromaDB"],
    href: "https://github.com/Snack-JPG/ai-due-diligence",
  },
  {
    title: "OpenClaw Knowledge Base",
    summary: "Organisational memory system for AI agents.",
    details:
      "Markdown-first architecture with propose-save workflows, trust controls, and conflict detection.",
    tech: ["Bash", "YAML", "Markdown-first"],
    href: "https://github.com/Snack-JPG/openclaw-kb",
  },
  {
    title: "OpenClaw Outreach",
    summary: "Cold email copilot replacing $97/mo SaaS tools.",
    details:
      "Sequence engine, reply classification, and personalisation built around lightweight local-first state.",
    tech: ["Bash", "YAML", "JSON state", "Himalaya SMTP"],
    href: "https://github.com/Snack-JPG/openclaw-outreach",
  },
  {
    title: "QuantFlow",
    summary: "Real-time order book intelligence platform.",
    details:
      "Tracks 15+ microstructure metrics, 8 manipulation detectors, and a custom event-driven backtester.",
    tech: ["Python", "FastAPI", "Next.js", "TimescaleDB", "Redis"],
    href: "https://github.com/Snack-JPG/quantflow",
  },
  {
    title: "GHL MCP Server",
    summary: "50-tool MCP integration for GoHighLevel.",
    details:
      "Connects AI agents to CRM, email, SMS, calendar, pipelines, and the operational surface area businesses actually use.",
    tech: ["TypeScript", "MCP Protocol"],
    href: "https://github.com/Snack-JPG/ghl-mcp",
  },
  {
    title: "chase.md",
    summary: "AI document chasing for UK accountancy practices.",
    details:
      "Intelligent multi-channel chasing (email → SMS → WhatsApp), AI doc recognition, and progress gamification. Solves a £945M industry problem.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Clerk", "Stripe"],
    href: "https://github.com/Snack-JPG/chase.md",
  },
  {
    title: "Solana TX Explainer",
    summary: "Blockchain transaction parser and visualiser.",
    details:
      "Decodes Solana transactions into human-readable explanations with full UI. Built to demonstrate real-time blockchain data processing.",
    tech: ["Next.js", "TypeScript", "Helius API", "Solana Web3.js"],
    href: "https://github.com/Snack-JPG/solana-tx-explainer",
  },
  {
    title: "TradeHub Directory",
    summary: "Business directory for UK tradesmen.",
    details:
      "Live at tradehub.directory. Prospecting pipeline with automated site generation for local trades businesses.",
    tech: ["Next.js", "Vercel", "Static Generation"],
    href: "https://tradehub.directory",
  },
];

function StatCard({ value, label, note }) {
  return (
    <article className="panel reveal">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
      <p className="stat-note">{note}</p>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`panel project-card reveal ${project.featured ? "project-card--featured" : ""}`}>
      <div className="project-line" />
      <div className="project-head">
        <div>
          <p className="eyebrow">{project.featured ? "Flagship" : "Project"}</p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>
        {project.href ? (
          <Link
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="pill-link"
          >
            GitHub
          </Link>
        ) : (
          <span className="pill-link pill-link--private">{project.privateLabel}</span>
        )}
      </div>
      <p className="project-details">{project.details}</p>
      <div className="badge-list">
        {project.tech.map((item) => (
          <span
            key={`${project.title}-${item}`}
            className="badge"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <section
        id="top"
        className="hero-grid"
      >
        <article className="hero-card reveal">
          <div className="hero-glow" />
          <div className="hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Austin Mander · AI Engineer & Builder</span>
              <h1 className="hero-title">I build things that actually ship.</h1>
              <p className="hero-text">
                I build AI agents that replace entire SaaS products. 550K lines shipped solo.
                Now I help businesses become AI-native — not with chatbots, but with
                intelligent agents that actually do the work.
              </p>
            </div>

            <div className="hero-actions">
              <Link
                href="#contact"
                className="cta-primary"
              >
                Work with me
              </Link>
              <Link
                href="https://github.com/Snack-JPG"
                target="_blank"
                rel="noreferrer"
                className="cta-secondary"
              >
                GitHub / Snack-JPG
              </Link>
            </div>
          </div>
        </article>

        <div className="stat-grid stat-grid--top">
          {stats.slice(0, 2).map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              note={stat.note}
            />
          ))}
        </div>
      </section>

      <section className="mid-grid">
        <article className="panel reveal">
          <p className="eyebrow">About</p>
          <p className="section-highlight">I dropped out of law to build software.</p>
          <p className="section-text">
            In 8 months I shipped an enterprise platform that Fortune 500 companies
            use, solo. Now I help professional services firms become AI-native. Not
            with chatbots. With agents that actually do the work.
          </p>
        </article>

        <article
          id="services"
          className="panel reveal"
        >
          <p className="eyebrow">What I Do</p>
          <div className="service-grid">
            {services.map((service) => (
              <div
                key={service}
                className="service-tile"
              >
                {service}
              </div>
            ))}
          </div>
        </article>

        <div className="stat-grid">
          {stats.slice(2).map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              note={stat.note}
            />
          ))}
        </div>
      </section>

      <section className="panel quote-panel reveal">
        <blockquote className="quote-block">
          <p className="quote-text">&ldquo;Every company needs an AI agent strategy. This is as big as HTML.&rdquo;</p>
          <cite className="quote-cite">— Jensen Huang, NVIDIA GTC 2026</cite>
        </blockquote>
      </section>

      <section
        id="projects"
        className="section-stack"
      >
        <div className="section-heading reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">
            Solo-built systems with real operational weight.
          </h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </section>

      <section
        id="stack"
        className="panel reveal"
      >
        <p className="eyebrow">Tech Stack</p>
        <div className="stack-grid">
          {Object.entries(stack).map(([group, items]) => (
            <div
              key={group}
              className="stack-card"
            >
              <h3 className="stack-title">{group}</h3>
              <div className="badge-list">
                {items.map((item) => (
                  <span
                    key={`${group}-${item}`}
                    className="badge"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="panel contact-panel reveal"
      >
        <div className="contact-glow" />
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">
              Helping businesses become AI-native with systems that do the work.
            </h2>
            <p className="section-text">
              If you need AI agents, internal tools, or product-grade automation that
              can survive real use, get in touch.
            </p>
          </div>
          <div className="contact-links">
            <Link
              href="mailto:austinmander04@gmail.com"
              className="contact-link"
            >
              austinmander04@gmail.com
            </Link>
            <Link
              href="https://github.com/Snack-JPG"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              github.com/Snack-JPG
            </Link>
            <span className="contact-link contact-link--muted">LinkedIn - placeholder</span>
            <Link
              href="mailto:austinmander04@gmail.com?subject=Work%20with%20Austin%20Mander"
              className="cta-primary"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
