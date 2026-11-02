import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";

function ProjectArtwork({ project }) {
  if (project.image) {
    return (
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.name} application preview`} loading="lazy" />
        <span className="image-caption">PROJECT PREVIEW</span>
      </div>
    );
  }

  return (
    <div className={`project-art project-art-${project.visual}`} aria-hidden="true">
      <span className="art-index">{project.number} / PROJECT</span>
      <span className="art-orbit" />
      <span className="art-glyph">{project.visual === "api" ? "{ }" : "✳"}</span>
      <span className="art-bottom-label">
        {project.visual === "ai" ? "IDEAS → APPLICATIONS" : project.name.toUpperCase()}
      </span>
      <span className="art-grid" />
    </div>
  );
}

function Projects() {
  return (
    <Reveal as="section" id="projects" className="section projects-section">
      <div className="page-shell">
        <div className="section-topline projects-heading">
          <div>
            <p className="eyebrow">03 / Selected work</p>
            <h2 className="section-title">Built with purpose.<br /><span>Still getting better.</span></h2>
          </div>
          <p className="section-aside">
            A selection of applications and learning projects. Each one taught
            me something new.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card${index === 0 ? " project-card-featured" : ""}`}
              key={project.name}
            >
              <ProjectArtwork project={project} />
              <div className="project-body">
                <div className="project-title-line">
                  <div>
                    <span className="project-number">{project.number}</span>
                    <h3>{project.name}</h3>
                  </div>
                  <span className={`status-badge${project.status === "Completed" ? " status-complete" : ""}`}>
                    <i /> {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    <FiGithub aria-hidden="true" /> Source
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live site <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default Projects;
