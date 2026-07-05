export default function ContactCTA() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    formSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="contact-cta-section reveal" aria-label="Final call to action">
      <div className="contact-cta-glow" aria-hidden="true" />

      <div className="contact-container">
        <p className="contact-tag">STILL DECIDING?</p>

        <h2 className="contact-cta-title">
          Let&apos;s build something
          <br />
          people will remember.
        </h2>

        <p className="contact-cta-subtitle">
          No commitment, no pressure — just a conversation about what
          you&apos;re trying to build.
        </p>

        <div className="contact-cta-actions">
          <button
            type="button"
            className="contact-cta-button"
            onClick={scrollToForm}
          >
            <span className="contact-cta-shine" aria-hidden="true" />
            <span>Start Your Project →</span>
          </button>

          <a className="contact-cta-link" href="mailto:thekinetix.co@gmail.com">
            or email us directly
          </a>
        </div>
      </div>
    </section>
  );
}