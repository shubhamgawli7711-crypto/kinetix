import useReveal from "../../hooks/useReveal";

export default function IndustryStrip() {
  useReveal();

  const industries = [
    "Restaurants",
    "Cafés",
    "Local Businesses",
    "Startups",
    "Personal Brands",
    "Automotive",
    "Healthcare",
    "Real Estate",
    "E-commerce",
  ];

  return (
    <section className="industry-strip reveal">

      <div className="industry-fade left"></div>
      <div className="industry-fade right"></div>

      <div className="marquee">

        <div className="marquee-track">

          {[...industries, ...industries].map((item, index) => (
            <span key={index}>
             <>
  <span className="dot"></span>
  {item}
</>
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}
