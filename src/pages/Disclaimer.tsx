import Navbar from "../components/site/Navbar";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import useReveal from "../hooks/useReveal";

import "../styles/disclaimer.css";

export default function Disclaimer() {

    useReveal();

    return (

        <>

            <Navbar />

            <main className="disclaimer-page">

                {/* HERO */}

                <section className="disclaimer-hero">

                    <div className="container">

                        <p className="disclaimer-tag reveal">

                            LEGAL

                        </p>

                        <h1 className="reveal">

                            Website
                            <span> Disclaimer</span>

                        </h1>

                        <p className="disclaimer-description reveal">

                            Please read this disclaimer carefully before
                            using the Kinetix website or relying on any
                            information published by our team.

                        </p>

                        <div className="disclaimer-meta reveal">

                            <span>

                                Last Updated

                            </span>

                            <strong>

                                July 2026

                            </strong>

                        </div>

                    </div>

                </section>

                {/* NAVIGATION */}

                <section className="disclaimer-navigation">

                    <div className="container">

                        <div className="disclaimer-nav reveal">

                            <a href="#general">

                                General Information

                            </a>

                            <a href="#accuracy">

                                Accuracy

                            </a>

                            <a href="#external">

                                External Links

                            </a>

                            <a href="#liability">

                                Liability

                            </a>

                            <a href="#contact">

                                Contact

                            </a>

                        </div>

                    </div>

                </section>

                {/* GENERAL */}

                <section
                    id="general"
                    className="disclaimer-section"
                >

                    <div className="container">

                        <div className="disclaimer-card reveal">

                            <h2>

                                General Information

                            </h2>

                            <p>

                                The information provided on this website
                                is intended solely for general
                                informational purposes. While we strive
                                to keep our content accurate and
                                up-to-date, it should not be considered
                                professional, legal or financial advice.

                            </p>

                        </div>

                    </div>

                </section>

                {/* ACCURACY */}

                <section
                    id="accuracy"
                    className="disclaimer-section alt"
                >

                    <div className="container">

                        <div className="disclaimer-card reveal">

                            <h2>

                                Accuracy of Information

                            </h2>

                            <p>

                                We make every effort to ensure the
                                information published on our website is
                                accurate. However, Kinetix makes no
                                warranties regarding completeness,
                                reliability or suitability of any
                                information presented.

                            </p>

                        </div>

                    </div>

                </section>
                                {/* EXTERNAL LINKS */}

                <section
                    id="external"
                    className="disclaimer-section"
                >

                    <div className="container">

                        <div className="disclaimer-card reveal">

                            <h2>

                                External Links

                            </h2>

                            <p>

                                Our website may include links to
                                third-party websites for your convenience.
                                Kinetix has no control over the content,
                                privacy practices or availability of these
                                websites and accepts no responsibility for
                                them.

                            </p>

                        </div>

                    </div>

                </section>

                {/* LIABILITY */}

                <section
                    id="liability"
                    className="disclaimer-section alt"
                >

                    <div className="container">

                        <div className="disclaimer-card reveal">

                            <h2>

                                Limitation of Liability

                            </h2>

                            <p>

                                By using this website, you acknowledge
                                that Kinetix shall not be liable for any
                                direct, indirect, incidental or
                                consequential damages resulting from the
                                use of this website or reliance on any
                                information published here.

                            </p>

                        </div>

                    </div>

                </section>

                {/* INTELLECTUAL PROPERTY */}

                <section
                    className="disclaimer-section"
                >

                    <div className="container">

                        <div className="disclaimer-card reveal">

                            <h2>

                                Intellectual Property

                            </h2>

                            <p>

                                Unless otherwise stated, all website
                                content including branding, graphics,
                                text, layouts and creative assets are the
                                intellectual property of Kinetix and may
                                not be copied, reproduced or distributed
                                without written permission.

                            </p>

                        </div>

                    </div>

                </section>

                {/* CHANGES */}

                <section
                    className="disclaimer-section alt"
                >

                    <div className="container">

                        <div className="disclaimer-card reveal">

                            <h2>

                                Changes to this Disclaimer

                            </h2>

                            <p>

                                We reserve the right to update or modify
                                this Disclaimer at any time without prior
                                notice. Continued use of the website
                                constitutes acceptance of any changes.

                            </p>

                        </div>

                    </div>

                </section>

                {/* CONTACT */}

                <section
                    id="contact"
                    className="disclaimer-contact"
                >

                    <div className="container">

                        <div className="contact-box reveal">

                            <h2>

                                Need More Information?

                            </h2>

                            <p>

                                If you have any questions regarding this
                                Disclaimer or the information published
                                on our website, please get in touch with
                                us.

                            </p>

                            <div className="contact-info">

                                <div>

                                    <span>

                                        Email

                                    </span>

                                    <strong>

                                        thekinetix.co@gmail.com

                                    </strong>

                                </div>

                                <div>

                                    <span>

                                        Website

                                    </span>

                                    <strong>

                                        www.thekinetix.co

                                    </strong>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <CTA />

            <Footer />

        </>

    );

}