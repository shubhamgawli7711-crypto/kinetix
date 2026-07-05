import Navbar from "../components/site/Navbar";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import useReveal from "../hooks/useReveal";

import "../styles/about-page.css";

export default function About() {

    useReveal();

    return (

        <>

            <Navbar />

            <main className="about-page">

                {/* HERO */}

                <section className="about-hero">

                    <div className="container">

                        <p className="about-tag reveal">

                            ABOUT KINETIX

                        </p>

                        <h1 className="reveal">

                            Building brands
                            <br />
                            that people
                            <span> remember.</span>

                        </h1>

                        <p className="about-description reveal">

                            Kinetix is a creative digital marketing studio
                            helping ambitious brands grow through strategy,
                            content, branding, websites and performance
                            marketing that delivers measurable impact.

                        </p>

                    </div>

                </section>

                {/* WHO WE ARE */}

                <section className="about-section">

                    <div className="container">

                        <div className="about-grid">

                            <div className="about-left reveal">

                                <p className="section-label">

                                    WHO WE ARE

                                </p>

                                <h2>

                                    More than
                                    <span> a marketing agency.</span>

                                </h2>

                            </div>

                            <div className="about-right reveal">

                                <p>

                                    We partner with startups, creators and
                                    businesses to create meaningful digital
                                    experiences that inspire trust and drive
                                    growth.

                                </p>

                                <p>

                                    Every project combines strategy,
                                    creativity and execution to build brands
                                    that stand out in competitive markets.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* MISSION */}

                <section className="about-section dark">

                    <div className="container">

                        <div className="mission-grid">

                            <div className="mission-card reveal">

                                <span>01</span>

                                <h3>

                                    Our Mission

                                </h3>

                                <p>

                                    To empower businesses through premium
                                    branding, creative storytelling and
                                    performance-focused digital marketing.

                                </p>

                            </div>

                            <div className="mission-card reveal">

                                <span>02</span>

                                <h3>

                                    Our Vision

                                </h3>

                                <p>

                                    To become a globally trusted creative
                                    partner recognised for innovation,
                                    quality and measurable results.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>
                                {/* CORE VALUES */}

                <section className="about-section">

                    <div className="container">

                        <div className="about-heading reveal">

                            <p className="section-label">

                                OUR VALUES

                            </p>

                            <h2>

                                The principles behind
                                <span> every project.</span>

                            </h2>

                        </div>

                        <div className="values-grid">

                            <div className="value-card reveal">

                                <h3>

                                    Strategy First

                                </h3>

                                <p>

                                    Every creative decision begins with
                                    research, planning and a clear
                                    understanding of your business goals.

                                </p>

                            </div>

                            <div className="value-card reveal">

                                <h3>

                                    Creative Excellence

                                </h3>

                                <p>

                                    We obsess over every detail to craft
                                    visuals and experiences that feel
                                    premium and memorable.

                                </p>

                            </div>

                            <div className="value-card reveal">

                                <h3>

                                    Measurable Growth

                                </h3>

                                <p>

                                    Beautiful work means nothing without
                                    results. Every project is designed to
                                    increase awareness, engagement and
                                    conversions.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* STATS */}

                <section className="about-section dark">

                    <div className="container">

                        <div className="stats-grid">

                            <div className="stat reveal">

                                <h2>

                                    100+

                                </h2>

                                <p>

                                    Creative Concepts

                                </p>

                            </div>

                            <div className="stat reveal">

                                <h2>

                                    25+

                                </h2>

                                <p>

                                    Happy Clients

                                </p>

                            </div>

                            <div className="stat reveal">

                                <h2>

                                    5+

                                </h2>

                                <p>

                                    Services

                                </p>

                            </div>

                            <div className="stat reveal">

                                <h2>

                                    ∞

                                </h2>

                                <p>

                                    Creative Possibilities

                                </p>

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