import "../../styles/cta.css";
import useReveal from "../../hooks/useReveal";

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

                <a

                    href="/contact"

                    className="cta-button"

                >

                    LET'S TALK

                    <span>

                        →

                    </span>

                </a>

            </div>

        </section>

    );

}