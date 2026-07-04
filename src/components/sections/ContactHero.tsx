export default function ContactHero() {
  return (
    <section className="contact-hero">
      {/* Animated Background */}
      <div className="contact-bg">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
        <span className="grid-overlay"></span>
      </div>

      <div className="contact-container">
        <div className="contact-left reveal">
          <span className="contact-tag">
            LET'S CREATE SOMETHING EXTRAORDINARY
          </span>

          <h1 className="contact-title">
            Let's Build
            <br />
            Something
            <span> Extraordinary.</span>
          </h1>

          <p className="contact-description">
            Whether you're launching a startup, scaling your business or
            creating a premium digital experience, Kinetix helps brands
            stand out through strategy, design and performance.
          </p>

          <a href="#contact-form" className="contact-btn">
            Start Your Project
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="contact-right reveal">
          <div className="status-card">
            <div className="status-glow"></div>

            <div className="status-dot"></div>

            <span className="status-title">
              Currently Accepting Projects
            </span>

            <h3>Available</h3>

            <div className="status-divider"></div>

            <div className="status-row">
              <span>Average Response</span>
              <strong>&lt;12 Hours</strong>
            </div>

            <div className="status-row">
              <span>Email</span>
              <strong>thekinetix.co@gmail.com</strong>
            </div>

            <div className="status-row">
              <span>Location</span>
              <strong>Mumbai, India</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  );
}