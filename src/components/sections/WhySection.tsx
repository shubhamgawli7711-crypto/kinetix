import useReveal from "../../hooks/useReveal";
const features = [
  {
    title: "Creative First",
    desc: "Every project starts with ideas, not templates."
  },
  {
    title: "Performance Driven",
    desc: "Beautiful content that is built to generate results."
  },
  {
    title: "Fast Delivery",
    desc: "Rapid production without sacrificing premium quality."
  },
  {
    title: "Modern Execution",
    desc: "Built for today's attention economy and Gen-Z audiences."
  }
];

export default function Why() {
  useReveal();
  return (
    <section className="why reveal">

      <span className="section-tag">
        WHY KINETIX
      </span>

      <h2>
        Brands choose us
        <br />
        because ordinary
        <br />
        doesn't scale.
      </h2>

      <div className="why-grid">

        {features.map((item) => (

          <div className="why-card" key={item.title}>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}