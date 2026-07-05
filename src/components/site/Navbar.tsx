import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* Logo */}

        <Link to="/" className="nav-logo">

          <img
            src="/logo-full.svg"
            alt="Kinetix"
            draggable={false}
            className={`logo-full ${scrolled ? "hide-logo" : ""}`}
          />

          <img
            src="/logo.svg"
            alt="K"
            draggable={false}
            className={`logo-small ${scrolled ? "show-logo" : ""}`}
          />

        </Link>

        {/* Navigation */}

        <nav className="nav-links">

  <Link to="/">Home</Link>

  <Link to="/about">About</Link>

  <Link to="/contact">Contact</Link>

</nav>

        {/* CTA */}

        <Link
    to="/contact"
    className="nav-btn"
>

    LET'S TALK

</Link>

        {/* Hamburger (mobile only) */}

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "nav-toggle--open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
        </button>

      </header>

      {/* Mobile drawer backdrop */}

      <div
        className={`mobile-drawer-backdrop ${
          menuOpen ? "mobile-drawer-backdrop--visible" : ""
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}

      <nav
        id="mobile-drawer"
        className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >

       <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

<Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        <Link
          to="/contact"
          className="mobile-drawer__cta"
          onClick={() => setMenuOpen(false)}
        >
          LET'S TALK →
        </Link>

      </nav>
    </>
  );
}