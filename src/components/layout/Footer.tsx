import "../../styles/footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-tagline">
        <h2>
          MAKE IT
          <br />
          UNFORGETTABLE<span>.</span>
        </h2>
      </div>

      <div className="footer-glass">

        <div className="footer-glow"></div>

        <div className="footer-shine"></div>

        <div className="footer-left">

          <a
            href="https://www.instagram.com/thekinetix.co?igsh=MWw0bmUxYjNjNjlvMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="mailto:thekinetix.co@gmail.com"
            className="footer-icon"
          >
            <FiMail size={22} />
          </a>

          <div className="footer-divider"></div>

          <p className="footer-copy">
            © 2026 Kinetix. All rights reserved.
          </p>

        </div>

        <div className="footer-right">

          <img
            src="/logo-full.svg"
            alt="Kinetix"
            className="footer-logo"
          />

        </div>

      </div>

    </footer>
  );
}