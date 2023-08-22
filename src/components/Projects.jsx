import React from "react";
import '../styles/components/Projects.css';
import {AppInfo} from "../info/AppInfo";
import ProjectCard from "./ProjectCard";

const Projects = () => {

    return (
        <div className="projects">
            <div className="projects-container">
                {
                    Object.keys(AppInfo.pages.Projects.projects).map((project, index) => {
                        const alt = index % 2 !== 0;
                        return (
                            <ProjectCard
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
    )
}

export default Projects;
