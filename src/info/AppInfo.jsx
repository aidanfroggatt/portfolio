import React from 'react';
import { FaLinkedin, FaGithub, FaRegEnvelopeOpen } from 'react-icons/fa';

export const AppInfo = {
    name: "Aidan Froggatt",
    landingPage : {
        heading: "Hi. I'm Aidan.",
        description: "A passionate Software Engineering Student looking to utilize my experience to design and develop solutions...",
        route: "/",
    },
    pages : [
        {
            name: "Experience",
            description: "My work experience",
            route: "/experience"
        },
        {
            name: "Projects",
            description: "My projects",
            route: "/projects"
        },
        {
            name: "Contact",
            description: "Contact me",
            route: "/contact"
        }
    ],
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