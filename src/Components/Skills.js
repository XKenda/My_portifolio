import React from "react";
import "../index.css";
import Skill from "./Skills_Components/Skill";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

const sk = [
    { id: 1, name: "HTML5", percentage: "95" },
    { id: 2, name: "CSS3", percentage: "85" },
    { id: 3, name: "JavaScript (ES6+)", percentage: "80" },
    {id: 4, name: "TypeScript", percentage: "75"},
    { id: 5, name: "React", percentage: "85" },
    { id: 6, name: "Responsive Design", percentage: "95" },
    {id: 7, name: "Redux Toolkit", percentage: "70"},
    {id: 7, name: "Tailwind CSS", percentage: "85"},
    {id: 8, name: "Node.js", percentage: "80"},
    {id: 9, name: "Express.js", percentage: "70"},
    {id: 10, name: "REST APIs", percentage: "75"},
    {id: 11, name: "JWT Authentication", percentage: "90"},
    {id: 12, name: "cookie parser", percentage: "70"},
    {id: 13, name: "PostgreSQL", percentage: "70"},
    {id: 14, name: "MongoDB", percentage: "85"},
    {id: 15, name: "mongoose", percentage: "80"},
    {id: 16, name: "SQL", percentage: "55"},
    {id: 17, name: "Git", percentage: "70"},
    {id: 18, name: "github", percentage: "80"},
    {id: 19, name: "Debugging", percentage: "90"},
    {id: 20, name: "Jest", percentage: "60"},











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
