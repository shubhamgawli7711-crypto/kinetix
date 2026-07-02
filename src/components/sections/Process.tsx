import "../../styles/process.css";
import useReveal from "../../hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, goals and audience before creating anything."
  },
  {
    number: "02",
    title: "Strategy",
    text: "We build a clear roadmap for branding, content and growth."
  },
  {
    number: "03",
    title: "Create",
    text: "From videos to websites, everything is crafted to a premium standard."
  },
  {
    number: "04",
    title: "Launch & Scale",
    text: "We optimise, analyse and continuously improve your digital presence."
  }
];

export default function Process() {
  useReveal();
  return (
    <section className="process reveal">

      <div className="container">

        <span className="section-tag">
          OUR PROCESS
        </span>

        <h2>
          How we build
          <br />
          winning brands.
        </h2>

        <div className="process-list">

          {steps.map((step) => (

            <div className="process-card" key={step.number}>

              <div className="process-number">
                {step.number}
              </div>

              <div className="process-content">

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}