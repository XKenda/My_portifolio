import { internshipOffers } from "../data/portfolio";
import Reveal from "./Reveal";

function Experience() {
  return (
    <Reveal as="section" id="experience" className="section experience-section">
      <div className="page-shell">
        <div className="section-topline">
          <div>
            <p className="eyebrow">05 / Professional development</p>
            <h2 className="section-title">Experience &amp; <span>offers.</span></h2>
          </div>
          <p className="section-aside">
            I keep this section factual: an offer is not the same as a completed internship.
          </p>
        </div>
        <div className="offer-grid">
          {internshipOffers.map((offer) => (
            <article className="offer-card" key={offer.organization}>
              <div className="offer-mark" aria-hidden="true">↗</div>
              <div>
                <p className="eyebrow">Remote · Internship offer</p>
                <h3>{offer.organization}</h3>
                <p className="offer-role">{offer.role}</p>
                <p className="offer-dates">{offer.dates}</p>
              </div>
              <span className="offer-note">Participation not confirmed</span>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default Experience;
