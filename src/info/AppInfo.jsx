import React from 'react';
import { FaLinkedin, FaGithub, FaRegEnvelopeOpen } from 'react-icons/fa';

export const AppInfo = {
    landingPage : {
        heading: "Hi. I'm Aidan.",
        description: "A passionate Software Engineering Student looking to utilize my experience to design and develop solutions...",
    },
    pages : [
        {
            name: "Experience",
            description: "My work experience",
        },
        {
            name: "Projects",
            description: "My projects",
        },
        {
            name: "Contact",
            description: "Contact me",
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
            url: "",
            icon: <FaRegEnvelopeOpen/>,
        }
    ]
}