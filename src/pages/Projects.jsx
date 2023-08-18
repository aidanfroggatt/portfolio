import React from "react";
import '../styles/pages/Projects.css';
import {AppInfo} from "../info/AppInfo";
import AnimatedPage from "../animations/AnimatedPage";
import Card from "../components/Card";

const Projects = () => {

    return (
        <AnimatedPage>
            <div className="projects">
                <div className="landing-page projects-landing-page">
                    <h1>{AppInfo.pages.Projects.name}.</h1>
                    <h2>{AppInfo.pages.Projects.description}</h2>
                </div>
                <div className="projects-container">
                    {
                        Object.keys(AppInfo.pages.Projects.projects).map((project, index) => {
                            const alt = index % 2 !== 0;
                            return (
                                <Card
                                    key={index}
                                    Heading={AppInfo.pages.Projects.projects[project].name}
                                    Subheading={AppInfo.pages.Projects.projects[project].additionalInfo.association}
                                    Body={AppInfo.pages.Projects.projects[project].description}
                                    Image={AppInfo.pages.Projects.projects[project].image}
                                    alt={alt}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Projects;
