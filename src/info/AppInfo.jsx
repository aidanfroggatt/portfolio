import React from 'react';
import { FaLinkedin, FaGithub, FaRegEnvelopeOpen } from 'react-icons/fa';

export const AppInfo = {
    pages : {
        AboutMe : {
            name: "Aidan Froggatt",
            heading: "Hi. I'm Aidan.",
            description: "A passionate Software Engineering Student looking to utilize my experience to design and develop solutions...",
            route: "/",
        },
        Experience: {
            name: "Experience",
            description: "An overview of my experience and skills...",
            route: "/experience"
        },
        Projects: {
            name: "Projects",
            description: "Some projects I have been developing in my spare time...",
            route: "/projects",
            projects: {
                "SnapCycle": {
                    name: "SnapCycle",
                    description: "A mobile application that allows users to take a picture of their waste and receive information on how to properly dispose of it.",
                    technologies: ["React JS", "Jira", "Git", "Figma"],
                    github: "https://github.com/snap-cycle/SnapCycle",
                    website: "",
                    image: "",
                    additionalInfo: {
                        association: "MacHacks3",
                        devpost: "https://devpost.com/software/snapcycle-hyx3qv",
                        awards: "Best Environmental Hack"
                    }
                },
                "CodeWarriors": {
                    name: "CodeWarriors",
                    description: "A website that allows users to compete in coding challenges and view their progress.",
                    technologies: ["React JS", "Tailwind CSS", "Figma"],
                    github: "https://github.com/aidanfroggatt/CodeWarriors",
                    website: "",
                    image: "",
                    additionalInfo: {
                        devpost: "https://devpost.com/software/code-warriors",
                        association: "DeltaHacks IX",
                        awards: "#1 Overall Hack"
                    }
                },
                "Portfolio": {
                    name: "Portfolio",
                    description: "A website that showcases my experience and projects.",
                    technologies: ["React JS, Tailwind CSS", "Figma"],
                    github: "https://github.com/aidanfroggatt/portfolio",
                    website: "https://aidanfroggatt.github.io/portfolio/",
                    image: "",
                    additionalInfo: {

                    }
                },
                "Island Generator": {
                    name: "Island Generator",
                    description: "A program that generates a mesh data structure and can populate the mesh with random island generation",
                    technologies: ["Java", "Maven", "Git"],
                    github: "https://github.com/aidanfroggatt/IslandGenerator",
                    website: "",
                    image: "",
                    additionalInfo: {
                        association: "McMaster University",
                    }
                },
                "Piraten Kapern Simulator": {
                    name: "Piraten Kapern Simulator",
                    description: "A program that simulates the card and dice game Piraten Kapern",
                    technologies: ["Java", "Maven", "Git"],
                    github: "https://github.com/aidanfroggatt/PiratenKapern",
                    website: "",
                    image: "",
                    additionalInfo: {
                        association: "McMaster University",
                    }
                }
            }
        },
        Contact: {
            name: "Contact",
            description: "Contact me",
            route: "/contact"
        }
    },
    socialMedia : {
        LinkedIn: {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/aidanfroggatt/",
            icon: <FaLinkedin/>,
        },
        Github: {
            name: "Github",
            url: "https://github.com/aidanfroggatt",
            icon: <FaGithub/>,
        },
        Email: {
            name: "Email",
            url: "mailto:aidanfr@live.ca",
            icon: <FaRegEnvelopeOpen/>,
        }
    }
}