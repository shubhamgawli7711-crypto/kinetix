import type { ProcessStep } from "../../data/processData";

interface Props {
    step: ProcessStep;
}

export default function ProcessPanel({ step }: Props) {

    return (

        <div className="process-right">

            <div className="process-panel">

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

        </div>

    );

}