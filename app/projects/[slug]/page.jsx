import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../lib/projects";

function ProjectMockup({ title, label }) {
  return (
    <div
      className="browser-mockup browser-mockup--large"
      aria-hidden="true"
    >
      <div className="browser-mockup__frame">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-mockup__screen">
        <div className="browser-mockup__glow" />
        <p className="browser-mockup__label">{label}</p>
        <h2 className="browser-mockup__title">{title}</h2>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - Austin Mander`,
    description: project.oneLine,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Austin Mander`,
      description: project.oneLine,
      type: "article",
      url: `https://austinmander.com/projects/${project.slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Austin Mander`,
      description: project.oneLine,
      images: ["/opengraph-image"],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 4);

  return (
    <main id="main-content" className="page-shell project-page-shell">
      <section className="project-page-hero panel reveal">
        <Link
          href="/#projects"
          className="back-link"
          aria-label="Back to project list on homepage"
        >
          <span aria-hidden="true">{"<-"}</span> Back to homepage
        </Link>

        <div className="project-page-copy">
          <p className="eyebrow">Case Study</p>
          <h1 className="project-page-title">{project.title}</h1>
          <p className="project-page-subtitle">{project.oneLine}</p>
        </div>

        <ProjectMockup
          title={project.title}
          label={project.screenshotLabel}
        />
      </section>

      <section className="project-page-grid">
        <article className="panel reveal">
          <p className="eyebrow">The Problem</p>
          <h2 className="project-section-title">Why this needed to exist</h2>
          <p className="section-text">{project.problem}</p>
        </article>

        <article className="panel reveal">
          <p className="eyebrow">The Solution</p>
          <h2 className="project-section-title">How Austin built it</h2>
          <p className="section-text">{project.solution}</p>
        </article>
      </section>

      <section className="project-page-grid project-page-grid--architecture">
        <article className="panel reveal">
          <p className="eyebrow">Architecture</p>
          <h2 className="project-section-title">System flow</h2>
          <ol className="architecture-diagram">
            {project.architectureNodes.map((node, index) => (
              <li
                key={`${project.slug}-${node}`}
                className="architecture-node"
              >
                <span className="architecture-node__index">{String(index + 1).padStart(2, "0")}</span>
                <span>{node}</span>
              </li>
            ))}
          </ol>
          <pre className="architecture-ascii">{project.architecture}</pre>
        </article>

        <aside className="project-sidebar">
          <article className="panel reveal time-card">
            <p className="eyebrow">Time to Build</p>
            <p className="time-card__value">{project.timeToBuild}</p>
            <p className="section-text">Built with a product mindset, not a prototype mindset.</p>
          </article>

          <article className="panel reveal">
            <p className="eyebrow">Tech Stack</p>
            <div className="badge-list badge-list--compact">
              {project.tech.map((item) => (
                <span
                  key={`${project.slug}-${item}`}
                  className="badge"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="panel reveal">
            <p className="eyebrow">Source</p>
            {project.repo.type === "private" ? (
              <p className="section-text">Private - available on request</p>
            ) : (
              <Link
                href={project.repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary"
              >
                {project.repo.type === "external" ? "Visit live project" : "View on GitHub"}
              </Link>
            )}
          </article>
        </aside>
      </section>

      <section className="panel reveal other-projects-panel">
        <div className="section-heading">
          <p className="eyebrow">Other Projects</p>
          <h2 className="project-section-title">More case studies</h2>
        </div>
        <div className="other-projects-grid">
          {otherProjects.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="other-project-card"
            >
              <span className="other-project-card__label">Case Study</span>
              <strong>{item.title}</strong>
              <span>{item.oneLine}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
