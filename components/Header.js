import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [activePath, setActivePath] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`menu ${isScrolled ? "menu--scrolled" : ""}`}>
      {/* Menu Items */}
      <div className="menu-items">
        <div
          className={`menu-item ${
            activePath === "/" ? "menu-item--active" : ""
          }`}
        >
          <div className="menu-item-highlight"></div>
          <Link href="/">
            <span className="menu-item-link">Welcome</span>
          </Link>
        </div>
        <div
          className={`menu-item ${
            activePath === "/about" ? "menu-item--active" : ""
          }`}
        >
          <div className="menu-item-highlight"></div>
          <Link href="/about">
            <span className="menu-item-link">About Me</span>
          </Link>
        </div>
        <div
          className={`menu-item ${
            activePath === "/projects" ? "menu-item--active" : ""
          }`}
        >
          <div className="menu-item-highlight"></div>
          <Link href="/projects">
            <span className="menu-item-link">My Projects</span>
          </Link>
        </div>
        <div
          className={`menu-item ${
            activePath === "/contact" ? "menu-item--active" : ""
          }`}
        >
          <div className="menu-item-highlight"></div>
          <Link href="/contact">
            <span className="menu-item-link">Contact Me</span>
          </Link>
        </div>
      </div>
      {/* Logo */}
      <span className="menu-Logo">
        <h3 className="">Dev Portfolio V0.1</h3>
      </span>
      <style jsx>{`
        .menu {
          position: fixed;
          display: flex;
          z-index: 99;
          width: 100%;
          padding: 0 5%;
          height: 7.5rem;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s;
        }
        .menu--scrolled {
          background-color: var(--color-paper); /* Adjust background color */
          box-shadow:var(--shadow-light);
          height: 5rem;
        }
        .menu--scrolled  .menu-Logo {
           padding: 2rem 2rem;
        }
        .menu-Logo {
          font-weight: lighter;
          font-size: 2rem;
        }
        .menu-Logo,
        .menu-item {
          display: block;
          position: relative;
          cursor: pointer;
          height: 100%;
          padding: 3rem 2rem;
        }
        .menu-items {
          position: relative;
          display: flex;
          align-items: center;
        }
        .menu-item {
          position: relative;
          display: block;
          left: 15rem;
          width: 15rem;
          text-align: center;
          transition: all 0.2s;
        }
        .menu-item-link {
          display: block;
          position: relative;
          font-size: 1.6rem;
          line-height: 1.6rem;
          letter-spacing: 0.2rem;
          color: var(--color-warm-gray);
          transition: color 0.2s ease-out;
          text-decoration: none;
        }
        .menu-item-highlight {
          display: block;
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: var(--color-warm-gray-light);
          transition: height 0.2s ease-out;
        }
        .menu-item:hover .menu-item-highlight {
          height: 100%;
        }
        .menu-item:hover .menu-item-link {
          color: var(--color-paper);
        }
        .menu-item--active {
          position: absolute;
          left: 0;
        }
        .menu-item--active .menu-item-highlight {
          height: 100%;
          position: absolute;
        }
        .menu-item--active .menu-item-link {
          color: var(--color-paper);
        }
        .menu-burger {
          display: none;
          position: relative;
          content: "";
          width: 2rem;
          height: 0.4rem;
          background-color: var(--color-ink);
        }
        .menu-burger::before {
          display: block;
          position: relative;
          content: "";
          width: 2rem;
          height: 0.4rem;
          top: -0.8rem;
          background-color: var(--color-ink);
        }
        .menu-burger:after {
          display: block;
          position: relative;
          content: "";
          width: 2rem;
          height: 0.4rem;
          top: 0.4rem;
          background-color: var(--color-ink);
        }
      `}</style>
    </div>
  );
};

export default Header;
