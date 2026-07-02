import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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

        <Link to="/services">Services</Link>

        <Link to="/contact">Contact</Link>

      </nav>

      {/* CTA */}

      <Link to="/contact" className="nav-btn">

        LET'S TALK →

      </Link>

    </header>
  );
}