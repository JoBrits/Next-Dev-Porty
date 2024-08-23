const MyExperience = ({ mainTitle, info, filterType }) => {
  return (
    <>
      <div className="experience-items">
        <h2 className="experience-main-title">{mainTitle}</h2>
        {info
          .filter((item) => item.type === filterType) // Filter by type
          .map((item) => (
            <div className="experience-item" key={item.id}>
              <h3 className="experience-item-title">{item.title}</h3>
              <p className="experience-item-years">{item.years}</p>
              <p className="experience-item-qualification">
                {item.qualification}
              </p>
              <p className="experience-item-description">{item.description}</p>
            </div>
          ))}
        {/* JSX STYLES */}
      </div>
      <style jsx>{`
        .experience-item {
          padding-bottom: 0;
          margin-bottom: 2.5rem;
        }
        .experience-item-title {
          margin-bottom: 0;
        }
        .experience-main-title {
          margin-bottom: 5rem;
        }
        .experience-item-description {
          margin-bottom: 5rem;
          letter-spacing: 0;
          color: var(--color-warm-gray-light);
          line-height: 2rem;
        }
        .experience-item-years {
          font-size: 1.4rem;
          margin-bottom: 0;
          color: var(--color-warm-gray-light);
        }
        .experience-item::before {
          content: "";
          position: absolute;
          width: 2.5rem;
          height: 2.5rem;
          background-color: var(--color-splash-5);
          border-radius: 2.5rem;
          border: 5px solid white;
          transform: translate(-5rem, -0.5rem);
        }
      `}</style>
    </>
  );
};

export default MyExperience;
