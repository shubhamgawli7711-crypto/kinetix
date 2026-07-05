import "../../styles/process.css";

import { processSteps } from "../../data/processData";

import Timeline from "./Timeline";
import ProcessPanel from "./ProcessPanel";
import { useProcessAnimation } from "./useProcessAnimation";
import useIsDesktop from "../../hooks/useIsDesktop";

export default function Process() {

    const {

        sectionRef,

        activeStep

    } = useProcessAnimation();

    const isDesktop = useIsDesktop(1101);

    return (

        <section
            ref={sectionRef}
            className="process"
        >

            <div className="process-bg">

                <div className="background-word">

                    {processSteps[activeStep].title.toUpperCase()}

                </div>

            </div>

            <div className="process-container">

                <div className="process-left">

                    <span className="section-tag">

                        OUR PROCESS

                    </span>

                    <h2>

                        From Idea

                        <br/>

                        to Impact.

                    </h2>

                    {isDesktop && (

                        <Timeline

                            activeStep={activeStep}

                        />

                    )}

                </div>

                {isDesktop ? (

                    <ProcessPanel

                        step={processSteps[activeStep]}

                    />

                ) : (

                    <div className="process-right process-right--stacked">

                        {processSteps.map((step) => (

                            <div
                                key={step.number}
                                className="process-panel reveal"
                                data-reveal="up"
                            >

                                <div className="panel-glow"></div>

                                <div className="panel-content">

                                    <span className="panel-number">
                                        {step.number}
                                    </span>

                                    <h3 className="panel-title">
                                        {step.title}
                                    </h3>

                                    <p className="panel-description">
                                        {step.description}
                                    </p>

                                    <div className="panel-divider"></div>

                                    <div className="panel-points">

                                        {step.points.map((point) => (

                                            <div
                                                className="panel-chip"
                                                key={point}
                                            >

                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M20 6L9 17L4 12" />
                                                </svg>

                                                <span>{point}</span>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}