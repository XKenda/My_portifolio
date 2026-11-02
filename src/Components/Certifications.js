import Reveal from "./Reveal";

function Certifications() {
  return (
    <Reveal as="section" id="certifications" className="certification-section">
      <div className="page-shell certification-inner">
        <div>
          <p className="eyebrow">06 / Learning beyond code</p>
          <h2>Curiosity has<br /><span>more than one lane.</span></h2>
        </div>
        <div className="certification-card">
          <span className="certification-icon" aria-hidden="true">✳</span>
          <div>
            <p className="eyebrow">Earned certification</p>
            <h3>HubSpot Inbound Sales</h3>
            <p>Identify · Connect · Explore · Advise</p>
          </div>
          <span className="certification-label">CERTIFIED</span>
        </div>
      </div>
    </Reveal>
  );
}

export default Certifications;
