import "../../styles/process.css";

import { processSteps } from "../../data/processData";

import Timeline from "./Timeline";
import ProcessPanel from "./ProcessPanel";
import { useProcessAnimation } from "./useProcessAnimation";

export default function Process() {

    const {

        sectionRef,

        activeStep

    } = useProcessAnimation();

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

                    <Timeline

                        activeStep={activeStep}

                    />

                </div>

                <ProcessPanel

                    step={processSteps[activeStep]}

                />

            </div>

        </section>

    );

}