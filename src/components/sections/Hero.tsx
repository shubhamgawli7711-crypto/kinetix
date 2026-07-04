import { useEffect, useMemo, useRef } from "react";
import Logo from "../site/Logo";

export default function Hero() {

    const watermarkRef = useRef<HTMLDivElement>(null);

    const frame = useRef<number | null>(null);

    const particles = useMemo(
        () =>
            Array.from({ length: 30 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 10}s`,
                duration: `${8 + Math.random() * 8}s`,
            })),
        []
    );

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {

            if (!watermarkRef.current) return;

            if (frame.current !== null) {
                cancelAnimationFrame(frame.current);
            }

            frame.current = requestAnimationFrame(() => {

                const x =
                    (e.clientX - window.innerWidth / 2) * 0.02;

                const y =
                    (e.clientY - window.innerHeight / 2) * 0.02;

                watermarkRef.current?.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                watermarkRef.current?.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            });

        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            if (frame.current !== null) {
                cancelAnimationFrame(frame.current);
            }

        };

    }, []);

    return (

        <section className="hero">

            {/* Background */}

            <div className="hero-glow"></div>

            <div className="hero-grid"></div>

            {/* Particles */}

            <div className="hero-particles">

                {particles.map((particle, index) => (

                    <span

                        key={index}

                        style={{

                            left: particle.left,

                            top: particle.top,

                            animationDelay: particle.delay,

                            animationDuration: particle.duration,

                        }}

                    />

                ))}

            </div>

            {/* Watermark */}

            <div className="hero-bg">

                <div

                    className="hero-watermark-wrapper"

                    ref={watermarkRef}

                >

                    <Logo

                        size={900}

                        className="hero-watermark"

                    />

                </div>

            </div>

            {/* Content */}

            <div className="container">

                <div className="hero-content">

                    <p className="hero-tag">

                        CREATIVE DIGITAL MARKETING STUDIO

                    </p>

                    <h1>

                        We don't follow

                        <br />

                        trends.

                        <br />

                        <span>We create</span>

                        <br />

                        <span>them.</span>

                    </h1>

                    <p className="hero-text">

                        We help ambitious brands grow through
                        strategy, content, branding, websites
                        and performance marketing that people
                        actually remember.

                    </p>

                    <div className="hero-buttons">

                        <button className="primary-btn">

                            LET'S TALK

                            <span>→</span>

                        </button>

                        <button className="secondary-btn">

                            OUR SERVICES

                        </button>

                    </div>

                </div>

            </div>

            {/* Scroll */}

            <div className="scroll-indicator">

                <span></span>

            </div>

        </section>

    );

}