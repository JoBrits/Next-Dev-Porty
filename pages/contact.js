import Link from "next/link";

export default () => (
  <header className="section-main-center">
    <div className="header-main-block layout-grid-content">
      <div className="header-main-content">
        <form action="mailto:jjohanbrits@gmail.com" method="POST">
          <h1>Get in touch</h1>
          <p>Submit the form below and I will contact you</p>
          <hr />
          <br />
          <br />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>

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
        </form>
      </div>

      <div className="header-main-image">
        <img
          alt="recent work image"
          src="static/design.jpg"
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
          height: 100%;
        }
      `}</style>
    </div>
  </header>
);
