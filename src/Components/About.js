import Reveal from "./Reveal";

const facts = [
  { label: "Based in", value: "Egypt" },
  { label: "Studying", value: "Computer Science · AI" },
  { label: "University", value: "Modern Academy in Maadi" },
  { label: "Expected graduation", value: "July 2027" },
];

function About() {
  return (
    <Reveal as="section" id="about" className="section about-section">
      <div className="page-shell about-layout">
        <div className="section-heading">
          <p className="eyebrow">01 / A little context</p>
          <h2>Curious about<br /><span>how things work.</span></h2>
          <p className="section-index">ABOUT ME</p>
        </div>
        <div className="about-content">
          <p className="about-lead">
            I&apos;m Mahmoud Ibrahim, a Computer Science student specializing in
            Artificial Intelligence and a Full Stack Web Developer.
          </p>
          <p>
            I enjoy building web applications, understanding how systems work
            behind the scenes, and solving practical problems through software.
            My main focus is React and Node.js, from responsive interfaces to
            backend services and database-driven applications.
          </p>
          <p>
            I&apos;m also interested in the engineering decisions behind
            maintainable software: architecture, security, performance, and
            thoughtful design. I&apos;m continuously learning and improving how
            I build.
          </p>
          <div className="facts-grid">
            {facts.map(({ label, value }) => (
              <div className="fact" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default About;
