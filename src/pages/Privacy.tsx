import Navbar from "../components/site/Navbar";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import useReveal from "../hooks/useReveal";

import "../styles/privacy.css";

export default function Privacy() {

    useReveal();

    return (

        <>

            <Navbar />

            <main className="privacy-page">

                {/* HERO */}

                <section className="privacy-hero">

                    <div className="container">

                        <p className="privacy-tag reveal">

                            LEGAL

                        </p>

                        <h1 className="reveal">

                            Privacy
                            <span> Policy</span>

                        </h1>

                        <p className="privacy-description reveal">

                            Your privacy matters to us. This policy explains
                            how Kinetix collects, uses and protects your
                            information when you use our website or contact
                            our team.

                        </p>

                        <div className="policy-meta reveal">

                            <span>

                                Last Updated

                            </span>

                            <strong>

                                July 2026

                            </strong>

                        </div>

                    </div>

                </section>

                {/* QUICK NAVIGATION */}

                <section className="policy-navigation">

                    <div className="container">

                        <div className="policy-nav reveal">

                            <a href="#information">

                                Information We Collect

                            </a>

                            <a href="#usage">

                                How We Use It

                            </a>

                            <a href="#cookies">

                                Cookies

                            </a>

                            <a href="#security">

                                Security

                            </a>

                            <a href="#rights">

                                Your Rights

                            </a>

                            <a href="#contact">

                                Contact

                            </a>

                        </div>

                    </div>

                </section>

                {/* INFORMATION */}

                <section
                    id="information"
                    className="policy-section"
                >

                    <div className="container">

                        <div className="policy-card reveal">

                            <h2>

                                Information We Collect

                            </h2>

                            <p>

                                We may collect information that you
                                voluntarily provide when submitting
                                enquiries through our website or
                                communicating with our team.

                            </p>

                            <ul>

                                <li>

                                    Full Name

                                </li>

                                <li>

                                    Email Address

                                </li>

                                <li>

                                    Company Name

                                </li>

                                <li>

                                    Project Information

                                </li>

                                <li>

                                    Any details shared through our
                                    contact form

                                </li>

                            </ul>

                        </div>

                    </div>

                </section>
                                {/* HOW WE USE INFORMATION */}

                <section
                    id="usage"
                    className="policy-section"
                >

                    <div className="container">

                        <div className="policy-card reveal">

                            <h2>

                                How We Use Your Information

                            </h2>

                            <p>

                                The information we collect helps us
                                communicate with you, deliver our
                                services and continuously improve your
                                experience with Kinetix.

                            </p>

                            <ul>

                                <li>Respond to enquiries and project requests.</li>

                                <li>Provide quotes and project updates.</li>

                                <li>Improve our website and services.</li>

                                <li>Maintain business communication.</li>

                                <li>Comply with legal obligations where required.</li>

                            </ul>

                        </div>

                    </div>

                </section>

                {/* COOKIES */}

                <section
                    id="cookies"
                    className="policy-section alt"
                >

                    <div className="container">

                        <div className="policy-card reveal">

                            <h2>

                                Cookies

                            </h2>

                            <p>

                                Our website may use cookies and similar
                                technologies to improve website
                                performance, remember preferences and
                                understand visitor behaviour.

                            </p>

                            <p>

                                You may disable cookies through your
                                browser settings, although some website
                                functionality may be affected.

                            </p>

                        </div>

                    </div>

                </section>

                {/* SECURITY */}

                <section
                    id="security"
                    className="policy-section"
                >

                    <div className="container">

                        <div className="policy-card reveal">

                            <h2>

                                Data Security

                            </h2>

                            <p>

                                We implement reasonable administrative,
                                technical and organisational measures to
                                safeguard your information from
                                unauthorised access, disclosure or loss.

                            </p>

                            <p>

                                While no online platform can guarantee
                                absolute security, we continuously work
                                to protect the information entrusted to
                                us.

                            </p>

                        </div>

                    </div>

                </section>

                {/* THIRD PARTY */}

                <section
                    className="policy-section alt"
                >

                    <div className="container">

                        <div className="policy-card reveal">

                            <h2>

                                Third-Party Services

                            </h2>

                            <p>

                                We may use trusted third-party services
                                such as hosting providers, analytics
                                platforms and communication tools to
                                operate our business efficiently.

                            </p>

                            <p>

                                These providers only receive the minimum
                                information necessary to perform their
                                respective services.

                            </p>

                        </div>

                    </div>

                </section>

                {/* RIGHTS */}

                <section
                    id="rights"
                    className="policy-section"
                >

                    <div className="container">

                        <div className="policy-card reveal">

                            <h2>

                                Your Rights

                            </h2>

                            <p>

                                Depending on applicable laws, you may
                                request access to, correction of or
                                deletion of your personal information.

                            </p>

                            <p>

                                To exercise these rights, please contact
                                us using the information provided below.

                            </p>

                        </div>

                    </div>

                </section>

                {/* CONTACT */}

                <section
                    id="contact"
                    className="policy-contact"
                >

                    <div className="container">

                        <div className="contact-box reveal">

                            <h2>

                                Questions?

                            </h2>

                            <p>

                                If you have any questions regarding this
                                Privacy Policy or how your information is
                                handled, feel free to contact us.

                            </p>

                            <div className="contact-info">

                                <div>

                                    <span>Email</span>

                                    <strong>

                                        thekinetix.co@gmail.com

                                    </strong>

                                </div>

                                <div>

                                    <span>Website</span>

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