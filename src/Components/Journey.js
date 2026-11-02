import { journey } from "../data/portfolio";
import Reveal from "./Reveal";

function Journey() {
  return (
    <Reveal as="section" id="journey" className="section journey-section">
      <div className="page-shell journey-layout">
        <div className="section-heading journey-heading">
          <p className="eyebrow">04 / Learning by building</p>
          <h2>My developer<br /><span>journey.</span></h2>
          <p className="journey-intro">
            No shortcuts or overnight success stories. Just curiosity,
            consistent practice, and projects that help me learn.
          </p>
          <div className="education-card">
            <span className="education-label">EDUCATION</span>
            <h3>Modern Academy in Maadi</h3>
            <p>Bachelor of Computer Science</p>
            <p>Artificial Intelligence specialization</p>
            <span className="education-dates">October 2023 — July 2027 (expected)</span>
          </div>
        </div>
        <ol className="journey-list">
          {journey.map((item, index) => (
            <li key={item.title}>
              <span className="journey-count">0{index + 1}</span>
              <span className="journey-marker" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

export default Journey;
