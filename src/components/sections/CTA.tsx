import "../../styles/cta.css";
import useReveal from "../../hooks/useReveal";
import { Link } from "react-router-dom";

export default function CTA() {

    useReveal();

    return (

        <section className="cta reveal">

            <div className="cta-bg"></div>

            <div className="cta-container">

                <span className="section-tag">

                    START YOUR PROJECT

                </span>

                <h2>

                    Ready to build

                    <br />

                    something exceptional?

                </h2>

                <p>

                    Strategy, branding, content, websites and campaigns—

                    everything your brand needs to stand out.

                </p>

                <Link

    to="/contact"

    className="cta-button"

>

    LET'S TALK

    <span>

        →

    </span>

</Link>

            </div>

        </section>

    );

}
<section className="legal-section">

    <div className="container">

        <div className="legal-links">

            <Link to="/terms">

                Terms & Conditions

            </Link>

            <span>│</span>

            <Link to="/privacy">

                Privacy Policy

            </Link>

            <span>│</span>

            <Link to="/disclaimer">

                Disclaimer

            </Link>

        </div>

    </div>

</section>