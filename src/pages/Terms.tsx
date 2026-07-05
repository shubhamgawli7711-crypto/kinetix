import Navbar from "../components/site/Navbar";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import useReveal from "../hooks/useReveal";

import "../styles/terms.css";

export default function Terms() {

    useReveal();

    return (

        <>

            <Navbar />

            <main className="terms-page">

                {/* HERO */}

                <section className="terms-hero">

                    <div className="container">

                        <p className="terms-tag reveal">

                            LEGAL

                        </p>

                        <h1 className="reveal">

                            Terms &
                            <span> Conditions</span>

                        </h1>

                        <p className="terms-description reveal">

                            These Terms & Conditions govern your access to
                            and use of the Kinetix website and any services
                            provided by our agency.

                        </p>

                        <div className="terms-meta reveal">

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

                <section className="terms-navigation">

                    <div className="container">

                        <div className="terms-nav reveal">

                            <a href="#acceptance">

                                Acceptance

                            </a>

                            <a href="#services">

                                Services

                            </a>

                            <a href="#payments">

                                Payments

                            </a>

                            <a href="#property">

                                Intellectual Property

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

                {/* ACCEPTANCE */}

                <section
                    id="acceptance"
                    className="terms-section"
                >

                    <div className="container">

                        <div className="terms-card reveal">

                            <h2>

                                Acceptance of Terms

                            </h2>

                            <p>

                                By accessing or using the Kinetix website,
                                you agree to comply with these Terms &
                                Conditions. If you do not agree with any
                                part of these terms, you should discontinue
                                use of this website.

                            </p>

                        </div>

                    </div>

                </section>

                {/* SERVICES */}

                <section
                    id="services"
                    className="terms-section alt"
                >

                    <div className="container">

                        <div className="terms-card reveal">

                            <h2>

                                Our Services

                            </h2>

                            <p>

                                Kinetix provides digital marketing,
                                branding, creative design, website
                                development, content production and related
                                creative services based on mutually agreed
                                project requirements.

                            </p>

                        </div>

                    </div>

                </section>
                                {/* PAYMENTS */}

                <section
                    id="payments"
                    className="terms-section"
                >

                    <div className="container">

                        <div className="terms-card reveal">

                            <h2>

                                Payments & Projects

                            </h2>

                            <p>

                                All project pricing, timelines and payment
                                milestones are agreed upon before work
                                begins. Failure to complete scheduled
                                payments may delay or suspend project
                                delivery until outstanding balances are
                                cleared.

                            </p>

                        </div>

                    </div>

                </section>

                {/* INTELLECTUAL PROPERTY */}

                <section
                    id="property"
                    className="terms-section alt"
                >

                    <div className="container">

                        <div className="terms-card reveal">

                            <h2>

                                Intellectual Property

                            </h2>

                            <p>

                                Unless otherwise agreed in writing, all
                                creative concepts, graphics, branding,
                                source files and website content remain the
                                property of Kinetix until full payment has
                                been received.

                            </p>

                            <p>

                                After project completion and final payment,
                                ownership of agreed deliverables is
                                transferred to the client unless stated
                                otherwise within the project agreement.

                            </p>

                        </div>

                    </div>

                </section>

                {/* LIABILITY */}

                <section
                    id="liability"
                    className="terms-section"
                >

                    <div className="container">

                        <div className="terms-card reveal">

                            <h2>

                                Limitation of Liability

                            </h2>

                            <p>

                                Kinetix shall not be held liable for any
                                indirect, incidental or consequential
                                damages arising from the use of this
                                website or our services beyond the value of
                                the agreed project.

                            </p>

                        </div>

                    </div>

                </section>

                {/* MODIFICATIONS */}

                <section
                    className="terms-section alt"
                >

                    <div className="container">

                        <div className="terms-card reveal">

                            <h2>

                                Changes to These Terms

                            </h2>

                            <p>

                                We reserve the right to update or modify
                                these Terms & Conditions at any time.
                                Continued use of our website after updates
                                constitutes acceptance of the revised
                                terms.

                            </p>

                        </div>

                    </div>

                </section>

                {/* CONTACT */}

                <section
                    id="contact"
                    className="terms-contact"
                >

                    <div className="container">

                        <div className="contact-box reveal">

                            <h2>

                                Questions About These Terms?

                            </h2>

                            <p>

                                If you have any questions regarding these
                                Terms & Conditions, please contact our
                                team.

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