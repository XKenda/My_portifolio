import React from "react";
import { useContext } from "react";

const Project = (props) => {
    const bg = {
        backgroundImage : `url(${props.src})`
    }

    return (
        <div onClick={()=> {window.open(props.url)}} style={bg} className="project project1">
            <h2 className="project-title">{props.title}</h2>
            <p className="project-discribtion">{props.disc}</p>
        </div>
        
    )

}


export default Project;