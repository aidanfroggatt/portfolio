import React from "react";
import '../styles/Projects.css';
import {AppInfo} from "../info/AppInfo";

const Projects = () => {

    return (
        <div className="landing-page">
            <h1>{AppInfo.pages.Projects.name}</h1>
            <h2>{AppInfo.pages.Projects.description}</h2>
        </div>
    )
}

export default Projects;
