import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiArrowDownRight, FiArrowUpRight, FiCode } from "react-icons/fi";
import resumePDF from "../images/resume.pdf";

function Main() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!preference) return undefined;
    const updatePreference = () => setReduceMotion(preference.matches);
    updatePreference();
    preference.addEventListener?.("change", updatePreference);
    return () => preference.removeEventListener?.("change", updatePreference);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Hello, I&apos;m Mahmoud</p>
          <h1>
            Building digital
            <br />
            experiences, <span>one line</span>
            <br />
            of code at a time.
          </h1>
          <p className="hero-intro">
            I&apos;m a Full Stack Web Developer focused on building modern web
            applications with React and Node.js.
          </p>
          <p className="hero-role" aria-label="Full Stack Web Developer">
            <span className="role-prefix">Currently focused on</span>
            <span className="role-name" aria-live="polite">
              {reduceMotion ? (
                "Full Stack Web Development"
              ) : (
                <Typewriter
                  words={[
                    "Full Stack Web Development",
                    "React.js Applications",
                    "Node.js & APIs",
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={65}
                  deleteSpeed={35}
                  delaySpeed={1600}
                />
              )}
            </span>
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore projects <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s connect <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="resume-link" href={resumePDF} download>
              Download resume <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="hero-footnote">
            <span>Computer Science · AI specialization</span>
            <span>Based in Egypt</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="A visual snapshot of my development workflow">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-cross cross-one" />
          <div className="visual-cross cross-two" />
          <div className="workflow-card">
            <div className="workflow-card-top">
              <span className="window-lights"><i /><i /><i /></span>
              <span className="workflow-label">A little about my process</span>
              <FiCode aria-hidden="true" />
            </div>
            <div className="workflow-title">
              <span className="workflow-index">01 — 03</span>
              <h2>Think it.<br />Build it.<br /><em>Improve it.</em></h2>
            </div>
            <div className="workflow-lines" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="workflow-card-bottom">
              <span>FRONTEND <b>↗</b></span>
              <span>BACKEND <b>↗</b></span>
              <span>LEARNING <b>↗</b></span>
            </div>
          </div>
          <div className="float-note note-code">
            <span className="note-icon"><FiCode aria-hidden="true" /></span>
            <span><b>Full stack</b><small>From interface to API</small></span>
          </div>
          <div className="float-note note-learning">
            <span className="learning-dot" />
            <span><b>Always learning</b><small>Next up: .NET fundamentals</small></span>
          </div>
          <div className="visual-caption"><span>FIG. 01</span> A work in progress, by design</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  );
}

export default Main;
