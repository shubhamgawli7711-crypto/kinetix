import useReveal from "../../hooks/useReveal";

export default function About() {

  useReveal();

  return (

    <section className="about reveal">

      <div className="about-glow"></div>
      <div className="about-orbs">

  <span></span>
  <span></span>
  <span></span>

</div>

      <div className="container about-grid">

        <div className="about-left">

          <p className="section-tag">
            ABOUT US
          </p>

          <h2>
  Creative Thinking.
  <br />
  <span>Strategic Execution.</span>
</h2>

          <p className="about-sub">
            We don't chase trends.
            We build brands people remember through
            strategy, creativity and execution.
          </p>

        </div>

        <div className="about-right">

          <p>
            Kinetix is a creative digital marketing agency helping ambitious
            brands build unforgettable identities, create engaging content,
            and grow through strategy-driven marketing.
          </p>

          <p>
            We combine branding, design, websites, content creation,
            performance marketing and storytelling to help businesses
            stand out in today's digital world.
          </p>

          <div className="about-stats">

  <div className="stat-card">

    <h3>Strategy</h3>

    <span>
      Every project begins with research, positioning and a clear growth plan.
    </span>

  </div>

  <div className="stat-card">

    <h3>Creativity</h3>

    <span>
      We create brands, content and websites that are memorable, not just beautiful.
    </span>

  </div>

  <div className="stat-card">

    <h3>Execution</h3>

    <span>
      From concept to launch, we focus on delivering work that drives real business results.
    </span>

  </div>

</div>

        </div>

      </div>

    </section>

  );

}