export default function ContactInfo() {
  return (
    <section className="contact-info-section reveal">
      <div className="contact-container">

        <div className="info-card">
          <div className="info-shine"></div>

          <div className="info-icon">
            ✉
          </div>

          <h3>Email</h3>

          <p>
            Have a project in mind? Drop us an email and we'll get back to
            you as soon as possible.
          </p>

          <a
            href="mailto:thekinetix.co@gmail.com"
            className="info-link"
          >
            thekinetix.co@gmail.com
          </a>
        </div>

        <div className="info-card">
          <div className="info-shine"></div>

          <div className="info-icon">
            📍
          </div>

          <h3>Location</h3>

          <p>
            Proudly based in Mumbai, working with ambitious brands across
            India and worldwide.
          </p>

          <span className="info-link">
            Mumbai, Maharashtra, India
          </span>
        </div>

        <div className="info-card">
          <div className="info-shine"></div>

          <div className="info-icon">
            ⚡
          </div>

          <h3>Response Time</h3>

          <p>
            Every inquiry is reviewed personally. Most project requests are
            answered within the same day.
          </p>

          <span className="info-link">
            Average Response &lt; 12 Hours
          </span>
        </div>

      </div>
    </section>
  );
}