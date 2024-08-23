import fs from "fs";
import path from "path";

// Components Import
import MyExperience from "../components/MyExperience";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "static", "data", "myHistory.json");
  const jsonData = fs.readFileSync(filePath);
  const myHistory = JSON.parse(jsonData);

  return {
    props: {
      myHistory,
    },
  };
}

export default ({ myHistory }) => (
  <>
    <header className="section-main-center">
      <div className="header-main-block layout-grid-content">
        <div className="header-main-content">
          <h1>Johan Brits</h1>
          <h2>Frontend Developer and Designer</h2>
          <p>
            My area of expertise is clean and user-oriented UI. With 15 years
            experience in the industry, I consider myself a skilled designer
            adapting my style of design to suit both the employer and client's
            needs.
          </p>
        </div>

        <div className="header-main-image">
          <img
            alt="recent work image"
            src="static/Preshoot009.jpg"
            className="hero-image"
          />
        </div>
      </div>
    </header>
    <section className="section-main-center">
      <div className="section-main-block layout-grid-content">
        <div className="section-main-content">
          <MyExperience
            mainTitle="Experience"
            filterType="work"
            info={myHistory}
          />
        </div>
      </div>
    </section>
    <section className="section-main-center">
      <div className="section-main-block layout-grid-content">
        <div className="section-main-content">
          <MyExperience
            mainTitle="Education"
            filterType="education"
            info={myHistory}
          />
        </div>
      </div>
    </section>

    {/* JSX STYLES */}
    <style jsx>{`
      .header-main-block {
        border-radius: 2.5rem;
        background-color: var(--color-paper);
      }
      .header-main-content {
        grid-column: content-col-start 3 / content-col-end 6;
        grid-row: content-row-start 1 / -1;
        padding: 10rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .header-main-image {
        grid-column: content-col-start 8 / content-col-end 12;
        grid-row: content-row-start 1 / -1;
        background-color: var(--color-warm-gray-dark);
        background-size: cover;
        background-position: top;
        overflow: hidden;
      }

      .hero-image {
        position: relative;
        border-style: none;
        height: 80vh;
        min-height: 60rem;
        opacity: 0.2;
        left: -50%;
      }
      .section-main-block {
        border-radius: 2.5rem;
        background-color: var(--color-paper);
        overflow:hidden;
      }
      .section-main-content {
        grid-column: content-col-start 3 / -3;
        grid-row: content-row-start 1 / -1;
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
  </>
);
