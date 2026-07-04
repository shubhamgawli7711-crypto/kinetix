import useReveal from "../../hooks/useReveal";
import "../../styles/why.css";

const cards = [
  {
    title: "Creative First",
    desc: "Every project starts with ideas, strategy and originality—not templates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3v8m0 0l3-3m-3 3l-3-3M5 21h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },

  {
    title: "Performance Driven",
    desc: "Beautiful content built with measurable growth and business results in mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16l4-4 3 3 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7h4v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },

  {
    title: "Fast Delivery",
    desc: "Rapid production without sacrificing premium quality or attention to detail.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 13h9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 8l5 5-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },

  {
    title: "Modern Execution",
    desc: "Designed for today's attention economy with clean systems and premium visuals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }
];

export default function WhySection() {
  useReveal();

  return (
    <section className="why reveal">

      <div className="container">

        <div className="why-heading">

          <span className="section-tag">
            WHY KINETIX
          </span>

          <h2>
            <span>Brands choose us</span>
            <br />
            because ordinary
            <br />
            doesn't scale.
          </h2>

          <p>
            We combine strategy, creativity and execution to
            build brands that stand out and deliver measurable
            business growth.
          </p>

        </div>

        <div className="why-grid">

          {cards.map((card, index) => (

            <div
              className="why-card"
              key={index}
            >

              <div className="card-glow"></div>

              <div className="icon-wrap">

                {card.icon}

              </div>

              <h3>{card.title}</h3>

              <p>{card.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}