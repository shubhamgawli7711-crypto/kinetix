import useReveal from "../../hooks/useReveal";
import "../../styles/services.css";

const services = [
  {
    number: "01",
    title: "Social Media Management",
    desc: "Content systems that consistently build attention, trust and sustainable growth."
  },
  {
    number: "02",
    title: "Content Production",
    desc: "High-end reels, commercial videos and campaigns built to convert."
  },
  {
    number: "03",
    title: "Website Development",
    desc: "Fast, premium websites designed to elevate your brand and generate leads."
  },
  {
    number: "04",
    title: "Brand Identity",
    desc: "Logos, visual systems and brand experiences that people remember."
  }
];

export default function Services() {

  useReveal();

  return (

    <section className="services reveal">

      <div className="services-top">

        <span className="section-tag">
          SERVICES
        </span>

        <h2>
  <span>Everything</span> your
  <br />
  brand needs.
</h2>
      </div>

      <div className="services-list">

        {services.map((item) => (

          <div
            className="service-card"
            key={item.number}
          >

      

            <div className="service-number">
              {item.number}
            </div>

            <div className="service-content">

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

            <div className="service-arrow">

              <span>→</span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}