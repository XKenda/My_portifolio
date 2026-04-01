import React, {useState } from "react";
import Project from "./Skills_Components/Project";
import pro1 from "../images/Pro1.png"
import pro2 from "../images/Pro2.png"
import pro3 from "../images/Pro3.png"
import pro4 from "../images/Pro4.png"
import pro5 from "../images/Pro5.png"
import pro6 from "../images/E-commerce.png"
import pro7 from "../images/movieProject.png"

const Projects = () => {



    const [active, setActive] = useState("btn-1st")

    const allProjects = [{src: pro1, title: "project 1", disc: "HTML & CSS simple design", url: "https://xkenda.github.io/Games-Platform/"},
                        {src: pro2, title: "Games Market", disc: "online HTML & CSS design", url: "https://xkenda.github.io/gameverse_shop/"},
                        {src: pro3, title: "Currence Exchange site", disc: "design with Bootstrap 5", url: "https://xkenda.github.io/currency_exchange/"},
                        {src: pro4, title: "Online Store", disc: "HTML, CSS and JS design", url: "https://xkenda.github.io/games_shop/"},
                        {src: pro5, title: "Portifolio", disc: "FrontEnd Project", url: "https://xkenda.github.io/My-Portifolio/"},
                        {src: pro6, title: "E-Commerce", disc: "FrontEnd Project", url: "https://xkenda.github.io/e_commerce/"},
                        {src: pro7, title: "Movie Pattreon", disc: "Full Stack Project", url: "https://github.com/XKenda/Movie-Project"},
                        { title: "Subscription tracker", disc: "Backend Project", url: "https://github.com/XKenda/Movie-Project"},

    ]


    return (
        <div id="projects" className="Projects-main-con">
            <h2 className="projects-main-title">Projects</h2>
            <p className="projects-main-p">My name is Mahmoud, I live in AlQaluiobua, Benha, There is some of my projects</p>
            <div className="projects-btn-con">
                <button onClick={() => setActive("btn-1st")} className={active === "btn-1st" ? "btn-1st projects-btn active" : "btn-1st projects-btn"}>Projects</button>
                <button onClick={() => setActive("btn-2nd")} className={active === "btn-2nd" ? "btn-2nd projects-btn active" : "btn-2nd projects-btn"}>Work Experience</button>
                <button onClick={() => setActive("btn-3rd")} className={active === "btn-3rd" ? "btn-3rd projects-btn active" : "btn-3rd projects-btn"}>About Me</button>
            </div>
            <div className="project-child-con">
                <div style={active === "btn-1st" ? { display: "flex" } : { display: "none" }} className="project-con 1st-sec">
                    {
                        allProjects.map((project)=>(
                            <Project src={project.src} title={project.title} disc={project.disc} url={project.url} />
                        ))
                    }
                </div>
                <div style={active === "btn-2nd" ? { display: "block" } : { display: "none" }} className="about work-exp-con 2nd-sec">
                    <div className="work-exp">
                        <p className="position-title">Frontend Developer (React.js) - Intern</p>
                        <p className="work-time">Jun 2025 - Jul 2025</p>
                    </div>
                    <div className="work-exp">
                        <p className="position-title">Software Developer (Frontend Focus) - Intern</p>
                        <p className="work-time">Jan 2025 - Jan 2026</p>
                    </div>
                </div>
                <div style={active === "btn-3rd" ? { display: "block" } : { display: "none" }} className="about 3rd-sec">
                    <p className="third-sec-about">My name is Mahmoud, and I'm Junior Full Stack Web Developer with hands-on experience building web applications
                                            using React.js and Node.js. Skilled in developing responsive user interfaces, designing
                                            RESTful APIs, and managing data flow between frontend and backend systems. Strong
                                            foundation in JavaScript (ES6+), state management, and scalable application
                                            architecture.
                                            </p>
                </div>
            </div>
        </div>
    )

}

export default Projects;