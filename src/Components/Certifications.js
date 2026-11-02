import { FiArrowUpRight } from "react-icons/fi";
import { certifications } from "../data/portfolio";
import Reveal from "./Reveal";

function Certifications() {
  return (
    <Reveal as="section" id="certifications" className="certification-section">
      <div className="page-shell">
        <div className="certification-heading">
          <p className="eyebrow">06 / Learning beyond code</p>
          <h2>Credentials built through <span>curiosity.</span></h2>
          <p>Formal study and training that support my work across development and beyond.</p>
        </div>
        <div className="certification-grid">
          {certifications.map(({ title, provider, date, description }) => (
            <article className="certification-card" key={title}>
              <span className="certification-icon" aria-hidden="true">✳</span>
              <div className="certification-copy">
                <h3>{title}</h3>
                <p className="certification-meta">
                  {provider}{date ? ` · ${date}` : ""}
                </p>
                <p className="certification-description">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <a
          className="certification-link"
          href="https://drive.google.com/drive/folders/14rup8yHCWtIRWNeWgdcLHv8NAyu9vFD0?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Certificates <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}

export default Certifications;
