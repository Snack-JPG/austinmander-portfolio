import Link from "next/link";

const routes = [
  { label: "Home", url: "/#top" },
  { label: "Projects", url: "/#projects" },
  { label: "Services", url: "/#services" },
  { label: "Contact", url: "/#contact" },
];

export const NavbarSection = () => {
  return (
    <header className="site-header">
      <nav
        className="site-nav"
        aria-label="Primary"
      >
        <Link
          href="/#top"
          className="brand-mark"
          aria-label="Austin Mander homepage"
        >
          AM
        </Link>
        <div className="nav-links">
          {routes.map((route) => (
            <Link
              key={route.url}
              href={route.url}
              className="nav-link"
              aria-label={`Jump to ${route.label}`}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
