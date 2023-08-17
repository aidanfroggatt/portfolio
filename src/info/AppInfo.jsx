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
            description: ".An overview of my experience and skills...",
            route: "/experience"
        },
        Projects: {
            name: "Projects",
            description: "Some projects I have been developing in my spare time...",
            route: "/projects"
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