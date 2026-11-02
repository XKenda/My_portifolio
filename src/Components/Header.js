import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navigation } from "../data/portfolio";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const sections = ["home", ...navigation.map(({ href }) => href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visibleEntry) setActiveSection(visibleEntry.target.id);
        },
        { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
      );
      sections.forEach((section) => observer.observe(section));
    }

    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer?.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Mahmoud Ibrahim, home">
          <span className="wordmark-mark">M.</span>
          <span>Mahmoud Ibrahim</span>
        </a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? "is-active" : ""}
              aria-current={activeSection === href.slice(1) ? "location" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <div className="nav-socials">
            <a href="https://github.com/XKenda" aria-label="GitHub" target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-ibrahim-ab4b76290/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
