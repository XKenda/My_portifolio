import { GoPerson } from "react-icons/go";
import resumePDF from "../images/resume.pdf";

const Resume = () => {
  return (
    <div className="resume-con">
      <a
        className="resume-btn"
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Download my resume"
      >
        <GoPerson />
        <span className="resume-tooltip">Download my resume</span>
      </a>
    </div>
  );
};

export default Resume;