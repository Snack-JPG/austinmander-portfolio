import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Austin Mander",
  description: "The page you requested does not exist on austinmander.com.",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="page-shell project-page-shell"
    >
      <section className="panel reveal">
        <p className="eyebrow">404</p>
        <h1 className="project-page-title">That page does not exist.</h1>
        <p className="section-text">
          The link may be out of date, or the case study may have moved.
        </p>
        <div className="hero-actions">
          <Link
            href="/#projects"
            className="cta-primary"
          >
            View projects
          </Link>
          <Link
            href="/#contact"
            className="cta-secondary"
          >
            Contact Austin
          </Link>
        </div>
      </section>
    </main>
  );
}
