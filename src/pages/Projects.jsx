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
                                    ImageAlt={AppInfo.pages.Projects.projects[project].imageAlt}
                                    alt={alt}
                                    GitHub={AppInfo.pages.Projects.projects[project].github}
                                    Website={AppInfo.pages.Projects.projects[project].website}
                                    Devpost={AppInfo.pages.Projects.projects[project].additionalInfo.devpost}
                                    Technologies={AppInfo.pages.Projects.projects[project].technologies}
                                    Awards={AppInfo.pages.Projects.projects[project].additionalInfo.awards}
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
