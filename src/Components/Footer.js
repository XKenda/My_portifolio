import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="footer-wordmark" href="#home">Mahmoud Ibrahim<span>.</span></a>
        <p>Designed and developed with curiosity, creativity, and code.</p>
        <div className="footer-links">
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
          <a href="#home" className="back-to-top">Back to top ↑</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Mahmoud Ibrahim</span>
      </div>
    </footer>
  );
}

export default Footer;
