import fs from "fs";
import path from "path";

// Components Import
import MyProjects from "../components/MyProjects";

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "static",
    "data",
    "devProjects.json"
  );
  const jsonData = fs.readFileSync(filePath);
  const projects = JSON.parse(jsonData);

  return {
    props: {
      projects,
    },
  };
}

export default ({ projects }) => (
  <>
    <header className="section-main-center">
      <div className="header-main-block layout-grid-content">
        <div className="header-main-content">
          <h1>Projects</h1>
          <h2>Some examples of projects I have coded</h2>
          <p>
            Please see below details. Some projects have working example links,
            I have included the github links to other projects.
          </p>
        </div>

        <div className="header-main-image">
          <img
            alt="recent work image"
            src="static/development.png"
            className="hero-image"
          />
        </div>
      </div>
    </header>
    <section className="section-main-full">
      <MyProjects
        mainTitle="MERN-Stack Projects"
        filterType="mern"
        info={projects}
      />
    </section>
    <section className="section-main-full">
      <MyProjects
        mainTitle="Full-Stack React Projects"
        filterType="react"
        info={projects}
      />
    </section>
    <section className="section-main-full">
      <MyProjects
        mainTitle="Vanilla Html and Css Projects"
        filterType="javascript"
        info={projects}
      />
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
      }
      .section-main-block {
        display: flex;
      }
      .section-main-content {
        display: flex;
      }
    `}</style>
  </>
);
6;
