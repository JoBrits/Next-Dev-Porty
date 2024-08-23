import Link from "next/link";

const MyProjects = ({ mainTitle, info, filterType }) => {
  return (
    <>
      <h2 className="project-main-title">{mainTitle}</h2>
      <div className="project-items">
        {info
          .filter((item) => item.type === filterType) // Filter by type
          .map((item) => (
            <div className="project-item" key={item.id}>
              <div>
                <div className="project-item-img">
                  <img
                    alt="recent work image"
                    src={item.previewImg}
                    className="hero-image"
                  />
                </div>
                <div className="project-item-content">
                  <h3 className="project-item-title">{item.title}</h3>
                  <p className="project-items-tech">Technologies used:</p>
                  <ul className="project-items-list">
                    {item.tech.map((techItem, index) => (
                      <li className="project-item-tech" key={index}>
                        {techItem}
                      </li>
                    ))}
                  </ul>
                  <p className="project-item-description">{item.description}</p>
                </div>
              </div>
              <div className="project-links">
                {item.urlExample && (
                  <Link href={item.urlExample}>
                    <span className="project-link">Preview</span>
                  </Link>
                )}
                {item.urlGit && (
                  <Link href={item.urlGit}>
                    <span className="project-link">GitHub</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        {/* JSX STYLES */}
      </div>
      <style jsx>{`
        .project-items {
          display: flex;
          width: 100%;
          column-gap: 2.5rem;
          row-gap: 2.5rem;
          flex-wrap: wrap;
        }
        .project-item {
          display: flex;
          flex-direction: column;
          flex: 1 1 30%;
          border-radius: 2.5rem;
          background-color: var(--color-paper);
          padding: 2.5rem;
          justify-content: space-between;
          overflow: hidden;
        }

        .project-items-tech,
        .project-item-tech {
          margin-bottom: 0;
        }
        .project-items-tech {
          font-size: 1.4rem;
          color: var(--color-warm-gray-light);
          display: flex;
        }
        .project-item-description {
          font-size: 1.4rem;
          line-height: 1.4rem;
          display: flex;
        }
        .project-items-list {
          font-size: 1.4rem;
          display: flex;
          column-gap: 2.5rem;
        }
        .project-item-tech {
          font-size: 1.2rem;
          color: var(--color-warm-gray-dark);
          display: flex;
        }
        .project-link {
          margin-right: 2.5rem;
        }
        .project-item-img {
          position: relative;
          top: -2.5rem;
          left: -2.5rem;
          z-index: 1;
          height: 20rem;
          width: calc(100% + 5rem);
          overflow: hidden;
          background-color: var(--color-warm-gray-dark);
        }
        .project-item-img img {
          position: relative;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        .project-item-content {
          z-index: 2;
        }
        .project-links {
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default MyProjects;
