"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const routes = [
  { label: "Home", url: "/#top" },
  { label: "Projects", url: "/#projects" },
  { label: "Services", url: "/#services" },
  { label: "Contact", url: "/#contact" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <Link
            href="/#top"
            className="brand-mark"
            onClick={closeMenu}
          >
            AM
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links nav-links--desktop">
            {routes.map((route) => (
              <Link
                key={route.url}
                href={route.url}
                className="nav-link"
              >
                {route.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`nav-mobile ${isOpen ? "nav-mobile--open" : ""}`}>
        <div className="nav-mobile-backdrop" onClick={closeMenu} />
        <nav className="nav-mobile-menu">
          {routes.map((route) => (
            <Link
              key={route.url}
              href={route.url}
              className="nav-mobile-link"
              onClick={closeMenu}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};