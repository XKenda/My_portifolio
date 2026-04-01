import React from "react";
import { useContext } from "react";

const Project = (props) => {
    const bg = {
        backgroundImage : `url(${props.src? props.src : ''})`,
        border: `${props.src? '': '1px solid black'}`
    }

    

    return (
        <div onClick={()=> {window.open(props.url)}} style={bg} className="project project1">
            {
                props.src? "" :
                <p className="no-image">
                    No Image Provided
                </p>
            }
            <h2 className="project-title">{props.title}</h2>
            <p className="project-discribtion">{props.disc}</p>
        </div>
        
    )

}


export default Project;