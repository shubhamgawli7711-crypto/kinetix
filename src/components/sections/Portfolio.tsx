import "../../styles/portfolio.css";
import useReveal from "../../hooks/useReveal";

const projects = [
  { type: "video", src: "/portfolio/coffee.mp4", title: "Coffee" },
  { type: "image", src: "/portfolio/restaurant.jpg", title: "Restaurant" },
  { type: "video", src: "/portfolio/fury.mp4", title: "Fury Customs" },
  { type: "video", src: "/portfolio/watch.mp4", title: "Watch Ad" },
  { type: "image", src: "/portfolio/ui.jpg", title: "Website" },
];

// Duplicate 4 times for a seamless loop
const items = [
  ...projects,
  ...projects,
  ...projects,
  ...projects,
];

export default function Portfolio() {
  useReveal();
  return (
    <section className="portfolio reveal">

      <span className="section-tag">
        FEATURED WORK
      </span>

      <h2>
        Work that moves
        <br />
        brands.
      </h2>

      <div className="portfolio-mask">

        <div className="portfolio-track">

          {items.map((item, index) => (

            <div className="portfolio-card" key={index}>

              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                />
              )}

              <div className="portfolio-overlay">

                <h3>{item.title}</h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}