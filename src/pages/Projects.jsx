import React from "react";
import '../styles/Projects.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";

const Projects = () => {

    return (
        <AnimatedPage>
            <div className="projects">
                <div className="landing-page">
                    <h1>{AppInfo.pages.Projects.name}.</h1>
                    <h2>{AppInfo.pages.Projects.description}</h2>
                </div>
                <div className="projects-container">

                </div>
            </div>
        </AnimatedPage>
    )
}

export default Projects;
