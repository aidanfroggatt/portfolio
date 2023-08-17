import React from 'react';
import { FaLinkedin, FaGithub, FaRegEnvelopeOpen } from 'react-icons/fa';

export const AppInfo = {
    name: "Aidan Froggatt",
    landingPage : {
        heading: "Hi. I'm Aidan.",
        description: "A passionate Software Engineering Student looking to utilize my experience to design and develop solutions...",
        route: "/",
    },
    pages : {
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
    socialMedia : [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/aidanfroggatt/",
            icon: <FaLinkedin/>,
        },
        {
            name: "Github",
            url: "https://github.com/aidanfroggatt",
            icon: <FaGithub/>,
        },
        {
            name: "Email",
            url: "mailto:aidanfr@live.ca",
            icon: <FaRegEnvelopeOpen/>,
        }
    ]
}