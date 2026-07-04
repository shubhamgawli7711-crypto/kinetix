import { useRef } from "react";
import "../../styles/portfolio.css";
import useReveal from "../../hooks/useReveal";

const projects = [
  {
    brand: "FURY CUSTOMS",
    project: "Product Launch",
    category: "Product Photography",
    src: "/portfolio/fury-product-launch.mp4",
    tags: ["Photography", "Branding", "Commercial"],
  },
  {
    brand: "TRAVEL CREATOR",
    project: "Travel Vlog",
    category: "Content Creation",
    src: "/portfolio/travel-creator.mp4",
    tags: ["Editing", "YouTube", "Instagram"],
  },
  {
    brand: "FURY CUSTOMS",
    project: "3D Reveal",
    category: "3D Motion",
    src: "/portfolio/fury-3d-reveal.mp4",
    tags: ["Blender", "Animation", "CGI"],
  },
  {
    brand: "ATHARVA HOTEL",
    project: "Content Production",
    category: "Video Production",
    src: "/portfolio/restaurant-campaign.mp4",
    tags: ["Cinematography", "Editing", "Social"],
  },
  {
    brand: "CAFÉ COMMERCIAL",
    project: "3D Advertisement",
    category: "Commercial",
    src: "/portfolio/cafe-3d-commercial.mp4",
    tags: ["3D", "Motion", "Commercial"],
  },
  {
    brand: "KINETIX",
    project: "Agency Website",
    category: "Web Design",
    src: "/portfolio/kinetix-website.mp4",
    tags: ["React", "UI", "Development"],
  },
  {
    brand: "FURY CUSTOMS",
    project: "Studio Shoot",
    category: "Product Photography",
    src: "/portfolio/fury-studio-shoot.mp4",
    tags: ["Studio", "Photography", "Commercial"],
  },
  {
    brand: "KINETIX",
    project: "Behind The Scenes",
    category: "Production",
    src: "/portfolio/behind-the-scenes.mp4",
    tags: ["Creative", "Direction", "Production"],
  },
  {
    brand: "GRAPHIC DESIGN",
    project: "Design Showcase",
    category: "Brand Identity",
    src: "/portfolio/graphic-design-showreel.mp4",
    tags: ["Branding", "Posters", "Social"],
  },
];

const items = [...projects, ...projects];

export default function Portfolio() {

  useReveal();

  const trackRef = useRef<HTMLDivElement>(null);

  return (

    <section className="portfolio reveal">

      <div className="portfolio-bg"></div>

      <div className="container">

        <div className="portfolio-heading">

          <span className="section-tag">

            SELECTED WORK

          </span>

          <h2>

            Ideas turned into
            <br />

            <span>brands people remember.</span>

          </h2>

          <p>

            Every frame, design and interaction is crafted
            to help brands stand out and scale.

          </p>

        </div>

      </div>

      <div className="portfolio-mask">

        <div
          className="portfolio-track"
          ref={trackRef}
        >

          {items.map((item, index) => (

            <div
              className="portfolio-card"
              key={index}
            >

              <div className="portfolio-number">

                {String((index % projects.length) + 1).padStart(2, "0")}

              </div>

              <video

                src={item.src}

                autoPlay

                muted

                loop

                playsInline

                preload="metadata"

              />

              <div className="portfolio-overlay">

                <span className="portfolio-category">

                  {item.category}

                </span>

                <div className="portfolio-title">

                  <span className="portfolio-brand">

                    {item.brand}

                  </span>

                  <h3>

                    {item.project}

                  </h3>

                </div>

                <div className="portfolio-tags">

                  {item.tags.map(tag => (

                    <span key={tag}>

                      {tag}

                    </span>

                  ))}

                </div>

                <button className="portfolio-btn">

                  ↗

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}