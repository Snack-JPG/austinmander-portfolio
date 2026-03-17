import Link from "next/link";
import { projects } from "./lib/projects";

const stats = [
  { value: "550K+", label: "lines of code shipped", note: "Change Radar alone." },
  { value: "8 months", label: "to build an enterprise SaaS solo", note: "From zero to production." },
  { value: "7+", label: "open source repositories", note: "Public work that ships." },
  { value: "4 repos", label: "shipped in a single day", note: "Still production-grade." },
];

const services = [
  "AI Agent Development - OpenClaw, LangChain, LangGraph",
  "AI Employees & Automation - replace SaaS with intelligent agents",
  "Full-Stack AI Applications - RAG, multi-agent systems, dashboards",
  "MCP & Tool Integration - connect AI to any business system",
];

const stack = {
  Languages: ["TypeScript", "Python", "Rust", "SQL", "Bash"],
  Frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  Backend: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Redis", "SQLite"],
  "AI/ML": [
    "LangChain",
    "LangGraph",
    "LangSmith",
    "OpenAI API",
    "Claude API",
    "Anthropic",
    "ChromaDB",
    "pgvector",
    "RAG",
    "MCP Protocol",
    "OpenClaw",
    "Multi-Agent Systems",
  ],
  Infrastructure: ["Docker", "Vercel", "AWS", "GitHub Actions", "CI/CD"],
  Tools: ["Git", "Linux", "OpenClaw", "Himalaya"],
};

const aiEmployeeFlow = [
  { title: "Knowledge Base", text: "Approved SOPs, client context, tone, and process memory.", accent: "cyan" },
  { title: "AI Employee", text: "One agent that reasons, executes, and keeps state across the business.", accent: "amber" },
  { title: "Tool Layer", text: "Inbox, CRM, calendar, internal docs, billing, and bespoke systems.", accent: "cyan" },
  { title: "Human Oversight", text: "Escalations, checkpoints, and approvals only where they matter.", accent: "amber" },
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

function ProjectMockup({ title, label, large = false }) {
  return (
    <div className={`browser-mockup ${large ? "browser-mockup--large" : ""}`}>
      <div className="browser-mockup__frame">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-mockup__screen">
        <div className="browser-mockup__glow" />
        <p className="browser-mockup__label">{label}</p>
        <h3 className="browser-mockup__title">{title}</h3>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`panel project-card reveal ${project.featured ? "project-card--featured" : ""}`}>
      <div className="project-line" />
      <ProjectMockup
        title={project.title}
        label={project.screenshotLabel}
      />
      <div className="project-head">
        <div>
          <p className="eyebrow">{project.featured ? "Flagship" : "Case Study"}</p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>
        {project.repo.type === "private" ? (
          <span className="pill-link pill-link--private">{project.repo.label}</span>
        ) : (
          <Link
            href={project.repo.href}
            target="_blank"
            rel="noreferrer"
            className="pill-link"
          >
            {project.repo.label}
          </Link>
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
      <Link
        href={`/projects/${project.slug}`}
        className="case-study-link"
      >
        View Case Study {"->"}
      </Link>
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
          <div className="hero-content hero-content--split">
            <div className="hero-copy">
              <span className="eyebrow">Austin Mander · AI Engineer & Builder</span>
              <h1 className="hero-title">I build AI systems with real operational weight.</h1>
              <p className="hero-text">
                I build AI agents that replace entire SaaS products. 550K lines shipped solo.
                Now I help businesses become AI-native with agents that understand the business,
                touch the tools, and do the work end-to-end.
              </p>
            </div>

            <div className="hero-aside">
              {/* <!-- Replace with actual headshot: /public/headshot.jpg --> */}
              <div
                className="headshot-placeholder"
                aria-label="Austin Mander headshot placeholder"
              >
                <span>AM</span>
              </div>
              <p className="hero-aside-text">
                Builder of AI employees, product-grade automations, and systems that hold up under real use.
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
                href="#projects"
                className="cta-secondary"
              >
                Browse case studies
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
            In 8 months I shipped an enterprise platform used by Fortune 500 companies, solo.
            Now I help professional services firms and operators replace software sprawl with
            intelligent systems that can actually execute.
          </p>
        </article>

        <article
          id="services"
          className="panel reveal"
        >
          <p className="eyebrow">Services</p>
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
          <cite className="quote-cite">- Jensen Huang, NVIDIA GTC 2026</cite>
        </blockquote>
      </section>

      <section className="panel ai-system-panel reveal">
        <div className="section-heading">
          <p className="eyebrow">How AI Employees Work</p>
          <h2 className="section-title">One intelligent operator connected to the whole stack.</h2>
          <p className="section-text ai-system-copy">
            Instead of 5 SaaS subscriptions and a VA, you get one intelligent agent connected
            to all your tools. It learns your business, follows your processes, and works while you sleep.
          </p>
        </div>
        <div className="ai-system-diagram">
          <div className="ai-system-column">
            <div className="diagram-card diagram-card--knowledge">
              <p className="diagram-kicker">Context</p>
              <h3>Business memory</h3>
              <p>Clients, playbooks, approved processes, edge cases, and constraints.</p>
            </div>
            <div className="diagram-card diagram-card--human">
              <p className="diagram-kicker">Control</p>
              <h3>Human approval</h3>
              <p>Only high-risk actions are escalated. Everything else flows automatically.</p>
            </div>
          </div>

          <div className="diagram-core">
            <div className="diagram-core__pulse" />
            <div className="diagram-card diagram-card--agent">
              <p className="diagram-kicker">Core Agent</p>
              <h3>AI Employee</h3>
              <p>Reasoning, sequencing, retrieval, tool use, follow-up, and reporting in one loop.</p>
            </div>
          </div>

          <div className="ai-system-column">
            <div className="diagram-card diagram-card--tools">
              <p className="diagram-kicker">Inputs + Outputs</p>
              <h3>Connected tools</h3>
              <p>CRM, inbox, calendar, internal docs, billing, spreadsheets, and bespoke APIs.</p>
            </div>
            <div className="diagram-card diagram-card--ops">
              <p className="diagram-kicker">Results</p>
              <h3>Operational work shipped</h3>
              <p>Outreach, reporting, client updates, triage, data entry, and back-office execution.</p>
            </div>
          </div>

          <div className="diagram-lines" aria-hidden="true">
            <span className="diagram-line diagram-line--left-top" />
            <span className="diagram-line diagram-line--left-bottom" />
            <span className="diagram-line diagram-line--right-top" />
            <span className="diagram-line diagram-line--right-bottom" />
          </div>
        </div>
        <div className="ai-system-footer">
          {aiEmployeeFlow.map((item) => (
            <div
              key={item.title}
              className={`system-pill system-pill--${item.accent}`}
            >
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="section-stack"
      >
        <div className="section-heading reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Solo-built systems with real operational weight.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
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
