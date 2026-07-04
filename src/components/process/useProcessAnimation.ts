import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useProcessAnimation() {

    const sectionRef = useRef<HTMLElement>(null);

    const currentStep = useRef(0);

    const [activeStep, setActiveStep] = useState(0);

    useLayoutEffect(() => {

        const trigger = ScrollTrigger.create({

            trigger: sectionRef.current,

            start: "top top",

            end: "+=4000",

            pin: true,

            scrub: 1,

            anticipatePin: 1,

            onUpdate: (self) => {

                const step = Math.min(
                    3,
                    Math.floor(self.progress * 4)
                );

                if (step !== currentStep.current) {

                    currentStep.current = step;

                    const content = document.querySelector(".panel-content");

                    if (content) {

                        gsap.to(content, {

                            opacity: 0,

                            y: -20,

                            filter: "blur(8px)",

                            duration: 0.25,

                            ease: "power2.in",

                            onComplete: () => {

                                setActiveStep(step);

                                gsap.fromTo(

                                    content,

                                    {
                                        opacity: 0,
                                        y: 20,
                                        filter: "blur(8px)"
                                    },

                                    {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                        duration: 0.45,
                                        ease: "power3.out"
                                    }

                                );

                            }

                        });

                    }

                }

            }

        });

        return () => {

            trigger.kill();

        };

    }, []);

    return {

        sectionRef,

        activeStep

    };

}