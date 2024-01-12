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
    FaPython, FaAws, FaShopify, FaDatabase, FaChartLine, FaNodeJs, FaChalkboardTeacher, FaDownload, FaJs
} from 'react-icons/fa';
import SnapCycleImage from "../assets/projects/snapcycle-home.jpg";
import CodeWarriorsImage from "../assets/projects/codewarriors-home.jpg";
import PortfolioImage from "../assets/projects/portfolio-home.jpg";
import MeshGeneratorImage from "../assets/projects/mesh-generator-sample.svg";
import PiratenKapernImage from "../assets/projects/piraten-kapern-cards.jpg";
import {SiApachemaven} from "react-icons/si";
import myResume from "../assets/Resume.pdf";

export const AppInfo = {
    pages : {
        AboutMe : {
            name: "Aidan Froggatt",
            heading: "Hi, I'm Aidan.",
            description: "A full-stack developer studying Software Engineering.",
            route: "/",
        },
        Experience: {
            description: "An overview of my experience and skills...",
            route: "/experience",
            timeline: {
                "IBM": {
                    role: "Frontend Developer Co-op",
                    company: "IBM",
                    location: "Markham, Ontario",
                    date: "Apr 2024 - Aug 2025",
                    description: "",
                    bulletPoints: [
                        "Incoming Frontend Developer Co-op at IBM...",
                    ],
                    technologies: {
                    },
                    additionalInfo: {
                    },
                },
                "BurloakTechnologies": {
                    role: "Software Engineer Co-op",
                    company: "Burloak Technologies",
                    location: "Burlington, Ontario",
                    date: "May 2023 - Sep 2023",
                    description: "",
                    bulletPoints: [
                        "Architected a full-stack web application for data analysis, data visualization, and report generation.",
                        "Built custom PDF scrapers, significantly increasing data collection efficiency.",
                        "Created a machine verification dashboard to detect material testing machine failure."
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
                        "Developed a Shopify plugin for Universole Fit's first client in a fast-paced startup environment.",
                        "Designed a Shopify theme app extension embedding Universole Fit’s technology in a Shopify storefront.",
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
                        "Taught over 400 children STEM topics and engineering principles.",
                        "Established new content and modified existing content for 8 STEM classes.",
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
            description: "Some projects I have been developing...",
            route: "/projects",
            projects: {
                "SnapCycle": {
                    name: "SnapCycle",
                    description: [
                        "Best Environmental Hack - MacHacks3.",
                        "A web app that scans items identifying their recyclability.",
                    ],
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
                        awards: "#1 Environmental Hack",
                    }
                },
                "Portfolio": {
                    name: "Portfolio",
                    description: [
                        "A web app that showcases experience and projects.",
                    ],
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
                    image: PortfolioImage,
                    imageAlt: "Portfolio Image",
                    additionalInfo: {
                        association: "Aidan Froggatt",
                    }
                },
                "CodeWarriors": {
                    name: "CodeWarriors",
                    description: [
                        "Best Overall Hack - DeltaHacksIX.",
                        "A web app that gamifies teaching programming skills.",
                    ],
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
                    description: [
                        "A program that generates a mesh data structure and can populate the mesh with random island generation",
                    ],
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
                    image: MeshGeneratorImage,
                    imageAlt: "Island Generator Image",
                    additionalInfo: {
                        association: "McMaster University",
                    }
                },
                "Piraten Kapern Simulator": {
                    name: "Piraten Kapern",
                    description: [
                        "A program that simulates the card and dice game Piraten Kapern",
                    ],
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
                    image: PiratenKapernImage,
                    imageAlt: "Piraten Kapern Simulator Image",
                    additionalInfo: {
                        association: "McMaster University",
                    },
                },
            },
        },
        Skills: {
            ReactJS: {
                name: "ReactJS",
                icon: <FaReact/>
            },
            NodeJS: {
                name: "NodeJS",
                icon: <FaNodeJs/>
            },
            Java: {
                name: "Java",
                icon: <FaJava/>
            },
            Maven: {
                name: "Maven",
                icon: <SiApachemaven/>
            },
            Git: {
                name: "Git",
                icon: <FaGit/>
            },
            CSS: {
                name: "CSS",
                icon: <FaCss3/>
            },
            Figma: {
                name: "Figma",
                icon: <FaFigma/>
            },
            Python: {
                name: "Python",
                icon: <FaPython/>
            },
            Jira: {
                name: "Jira",
                icon: <FaJira/>
            },
            MySQL: {
                name: "MySQL",
                icon: <FaDatabase/>
            },
            PowerBI: {
                name: "PowerBI",
                icon: <FaChartLine/>
            },
            AWS: {
                name: "AWS (Amazon Web Services)",
                icon: <FaAws/>
            },
            JavaScript: {
                name: "JavaScript",
                icon: <FaJs/>
            }
        },
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
        },
        Resume: {
            name: "Resume",
            url: myResume,
            icon: <FaDownload/>,
        },
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