import React from "react";
import "../index.css";
import Skill from "./Skills_Components/Skill";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

const sk = [
    { id: 1, name: "HTML5", percentage: "90" },
    { id: 2, name: "CSS3", percentage: "85" },
    { id: 3, name: "JavaScript", percentage: "80" },
    { id: 4, name: "React", percentage: "70" },
    { id: 5, name: "Responsive Design", percentage: "75" },
    {id: 6, name: "NodeJS", percentage: "55"}

];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const Skills = () => {

    return (
        <div className="skills-bg">
            <div id="skills" className="skills-main-con">
                <h2 className="skills-sec-title">Skills</h2>
                <p className="skills-sec-disc">You can see my skills here</p>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    arrows={true}
                    className="skills-child-con"
                >
                    {sk.map((skill) => (
                        <Skill
                            key={skill.id}
                            id={skill.id}
                            percentage={skill.percentage}
                            name={skill.name}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Skills;
