import { useEffect, useRef } from "react";
import Logo from "../site/Logo";

export default function Hero() {
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!watermarkRef.current) return;

      const x = (e.clientX - window.innerWidth / 2) * 0.02;
      const y = (e.clientY - window.innerHeight / 2) * 0.02;

      watermarkRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero">

      {/* Ambient Glow */}
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>

      {/* Floating Particles */}
      <div className="hero-particles">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Background Logo */}
      <div
        className="hero-bg"
        ref={watermarkRef}
      >
        <Logo
          size={900}
          className="hero-watermark"
        />
      </div>

      {/* Content */}
      <div className="container">

        <div className="hero-content">

          <p className="hero-tag">
            CREATIVE DIGITAL MARKETING STUDIO
          </p>

          <h1>
            We don't follow
            <br />
            trends.
            <br />
            <span>We create</span>
            <br />
            <span>them.</span>
          </h1>

          <p className="hero-text">
            We help ambitious brands grow through
            strategy, content, branding, websites
            and performance marketing that people
            actually remember.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              LET'S TALK
              <span>→</span>
            </button>

            <button className="secondary-btn">
              OUR SERVICES
            </button>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}