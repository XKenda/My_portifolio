import { FiArrowUpRight } from "react-icons/fi";
import { learningSkills, skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";

function Skills() {
  return (
    <Reveal as="section" id="skills" className="section skills-section">
      <div className="page-shell">
        <div className="section-topline">
          <div>
            <p className="eyebrow">02 / Tools I work with</p>
            <h2 className="section-title">A growing <span>toolkit.</span></h2>
          </div>
          <p className="section-aside">
            Skills are a practice, not a score.
            <FiArrowUpRight aria-hidden="true" />
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <span className="card-index">0{index + 1}</span>
                <span className="skill-card-mark" aria-hidden="true">✳</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="tag-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="learning-panel">
          <div className="learning-heading">
            <span className="learning-spark" aria-hidden="true">↗</span>
            <div>
              <p className="eyebrow">In progress</p>
              <h3>Currently learning</h3>
            </div>
          </div>
          <ul className="learning-tags">
            {learningSkills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default Skills;
