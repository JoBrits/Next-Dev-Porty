// Next.js’ Link API.*/
import Link from "next/link";

export default () => (
  <header className="section-main-center">
    <div className="header-main-block layout-grid-content">
      <div className="header-main-content">
        <h1>Portfolio</h1>
        <p>
          I'm Johan Brits an Interaction Designer, Web Designer, Creative Geek
          and Web Developer
        </p>
        <p>
          My area of expertise is clean and user-oriented UI. With 15 years
          experience in the industry, I consider myself a skilled designer
          adapting my style of design to suit both the employer and client's
          needs.
        </p>
        <div>
          <Link href="https://www.behance.net/jjohanbritfbc6" target="_blank">
            <img alt="behance logo" src="static/behance-icon.svg" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/johan-brits-4b22982b/"
            target="_blank"
          >
            <img alt="linkedin logo" src="static/linkedin-icon.svg" />
          </Link>
        </div>
      </div>

      <div className="header-main-image">
        <img
          alt="recent work image"
          src="static/recentwork.svg"
          className="header-main-image-1"
        />
      </div>
      
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

        .header-main-image-1 {
          position: relative;
          width: 100%;
          transform: translateY(-50%);
          top: 50%;
          opacity: 0.1;
        }
      `}</style>
    </div>
  </header>
);
