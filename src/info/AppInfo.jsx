import React from 'react';
import {
    FaLinkedin,
    FaGithub,
    FaRegEnvelopeOpen,
    FaReact,
    FaCss3,
    FaJira,
    FaGit,
    FaFigma,
    FaJava,
    FaPython, FaAws, FaShopify, FaDatabase, FaChartLine, FaNodeJs, FaChalkboardTeacher
} from 'react-icons/fa';
import SnapCycleImage from "../assets/snapcycle_home.png";
import CodeWarriorsImage from "../assets/codewarriors_home.jpg";
import {SiApachemaven} from "react-icons/si";
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
            route: "/experience",
            timeline: {
                "BurloakTechnologies": {
                    role: "Software Engineer Co-op",
                    company: "Burloak Technologies",
                    location: "Burlington, Ontario",
                    date: "May 2023 - Sep 2023",
                    description: "",
                    bulletPoints: [
                        "Architected a full-stack web application for data analysis, data visualization, and automated report generation using ExpressJS, ReactJS, and MySQL.",
                        "Built custom PDF scrapers using Python, significantly increasing data collection efficiency.",
                        "Created a machine verification dashboard using Power BI to detect material testing machine failure"
                    ],
                    technologies: {
                        "ReactJS": {
                            name: "ReactJS",
                            icon: <FaReact/>
                        },
                        "NodeJS": {
                            name: "NodeJS",
                            icon: <FaNodeJs/>
                        },
                        "Python": {
                            name: "Python",
                            icon: <FaPython/>
                        },
                        "MySQL": {
                            name: "MySQL",
                            icon: <FaDatabase/>
                        },
                        "PowerBI": {
                            name: "PowerBI",
                            icon: <FaChartLine/>
                        },
                    },
                    additionalInfo: {

                    }
                },
                "UniversoleFit": {
                    role: "Web Developer",
                    company: "Universole Fit",
                    location: "Burlington, Ontario",
                    date: "Mar 2023 - May 2023",
                    description: "",
                    bulletPoints: [
                        "Developed a Shopify plugin using ReactJS, Shopify CLI, AWS, and Cognito for Universole Fit's first client in a fast-paced startup environment.",
                        "Designed a Shopify theme app extension with ReactJS, Shopify CLI, AWS, and Cognito embedding Universole Fit’s technology in a Shopify storefront.",
                        "Wrote documentation for all software."
                    ],
                    technologies: {
                        "ReactJS": {
                            name: "ReactJS",
                            icon: <FaReact/>
                        },
                        "AWS": {
                            name: "AWS (Amazon Web Services)",
                            icon: <FaAws/>
                        },
                        "Shopify": {
                            name: "Shopify",
                            icon: <FaShopify/>
                        },

                    },
                    additionalInfo: {

                    }
                },
                "CodeNinjas": {
                    role: "Lead Instructor",
                    company: "Code Ninjas",
                    location: "Burlington, Ontario",
                    date: "Jun 2022 - Sep 2022",
                    description: "",
                    bulletPoints: [
                        "Taught over 400 children science, technology, engineering, and math (STEM) topics including Scratch, Spike Prime (Python), MCreator, and engineering principles.",
                        "Established new content and modified existing content for 8 STEM classes.",
                        "Guided team members to optimize learning for students."
                    ],
                    technologies: {
                        "Teaching": {
                            name: "Teaching",
                            icon: <FaChalkboardTeacher/>
                        },

                    },
                    additionalInfo: {

                    }
                },
            }
        },
        Projects: {
            name: "Projects",
            description: "Some projects I have been developing...",
            route: "/projects",
            projects: {
                "SnapCycle": {
                    name: "SnapCycle",
                    description: "A web app that scans items identifying their recyclability.",
                    date: "Mar 2023 - Present",
                    technologies: {
                        "ReactJS": {
                            name: "ReactJS",
                            icon: <FaReact/>
                        },
                        "Python": {
                            name: "Python",
                            icon: <FaPython/>
                        },
                        "CSS": {
                            name: "CSS",
                            icon: <FaCss3/>
                        },
                        "Jira": {
                            name: "Jira",
                            icon: <FaJira/>
                        },
                        "Figma": {
                            name: "Figma",
                            icon: <FaFigma/>
                        },
                    },
                    github: "https://github.com/snap-cycle/SnapCycle",
                    website: "",
                    image: SnapCycleImage,
                    imageAlt: "SnapCycle Image",
                    additionalInfo: {
                        association: "MacHacks3",
                        devpost: "https://devpost.com/software/snapcycle-hyx3qv",
                        awards: "Best Environmental Hack",
                    }
                },
                "Portfolio": {
                    name: "Portfolio",
                    description: "A web app that showcases my experience and projects.",
                    date: "Mar 2023 - Present",
                    technologies: {
                        "ReactJS": {
                            name: "ReactJS",
                            icon: <FaReact/>
                        },
                        "CSS": {
                            name: "CSS",
                            icon: <FaCss3/>
                        },
                        "Figma": {
                            name: "Figma",
                            icon: <FaFigma/>
                        },
                    },
                    github: "https://github.com/aidanfroggatt/portfolio",
                    website: "https://aidanfroggatt.github.io/portfolio/",
                    image: "",
                    imageAlt: "Portfolio Image",
                    additionalInfo: {
                        association: "Aidan Froggatt",
                    }
                },
                "CodeWarriors": {
                    name: "CodeWarriors",
                    description: "A web app that gamifies teaching programming skills.",
                    date: "Mar 2023",
                    technologies: {
                        "ReactJS": {
                            name: "ReactJS",
                            icon: <FaReact/>
                        },
                        "CSS": {
                            name: "CSS",
                            icon: <FaCss3/>
                        },
                        "Figma": {
                            name: "Figma",
                            icon: <FaFigma/>
                        },
                    },
                    github: "https://github.com/aidanfroggatt/CodeWarriors",
                    website: "",
                    image: CodeWarriorsImage,
                    imageAlt: "CodeWarriors Image",
                    additionalInfo: {
                        devpost: "https://devpost.com/software/code-warriors",
                        association: "DeltaHacks IX",
                        awards: "#1 Overall Hack",
                    }
                },
                "Island Generator": {
                    name: "Island Generator",
                    description: "A program that generates a mesh data structure and can populate the mesh with random island generation",
                    date: "Feb 2023 - Apr 2023",
                    technologies: {
                        "Java": {
                            name: "Java",
                            icon: <FaJava/>
                        },
                        "Maven": {
                            name: "Maven",
                            icon: <SiApachemaven/>
                        },
                        "Git": {
                            name: "Git",
                            icon: <FaGit/>
                        },
                    },
                    github: "https://github.com/aidanfroggatt/IslandGenerator",
                    website: "",
                    image: "",
                    imageAlt: "Island Generator Image",
                    additionalInfo: {
                        association: "McMaster University",
                    }
                },
                "Piraten Kapern Simulator": {
                    name: "Piraten Kapern",
                    description: "A program that simulates the card and dice game Piraten Kapern",
                    date: "Jan 2023 - Feb 2023",
                    technologies: {
                        "Java": {
                            name: "Java",
                            icon: <FaJava/>
                        },
                        "Maven": {
                            name: "Maven",
                            icon: <SiApachemaven/>
                        },
                        "Git": {
                            name: "Git",
                            icon: <FaGit/>
                        },
                    },
                    github: "https://github.com/aidanfroggatt/PiratenKapern",
                    website: "",
                    image: "",
                    imageAlt: "Piraten Kapern Simulator Image",
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
    },
    credits: {
        creditsTag: "Developed by Aidan Froggatt",
        contributors: {
            "Aidan Froggatt": {
                name: "Aidan Froggatt",
                contributions: "Portfolio Website",
                github: "https://github.com/aidanfroggatt",
                portfolio: "https://aidanfroggatt.github.io/portfolio/"
            }
        }
    }
}