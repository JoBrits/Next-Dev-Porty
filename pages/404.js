// Next.js’ Link API.*/
import Link from "next/link";

const NotFound = () => {
  return (
    <header className="section-main-center">
      <div className="header-main-block layout-grid-content">
        <div className="header-main-content">
          <h1>OOPS..</h1>
          <h2>Page can not be found</h2>
          <p>
            Go back to the <Link href="/">home page</Link>
          </p>
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
            grid-row: content-row-start 8 / -1;
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
            transform: translateY(-50%);
            top: 50%;
            opacity: 0.1;
          }
        `}</style>
      </div>
    </header>
  );
};

export default NotFound;
