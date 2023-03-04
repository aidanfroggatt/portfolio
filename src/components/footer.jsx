import {FaGithub, FaRegEnvelopeOpen, FaLinkedin} from 'react-icons/fa';
import React from "react";
const Footer = () => {
    return (
        <div className="w-auto h-auto flex flex-row ">
            <FooterIcon icon={<FaGithub size="28" />} text="Github" destination="https://github.com/aidanfroggatt"/>
            <FooterIcon icon={<FaRegEnvelopeOpen size="28" />} text="Email" destination="mailto:aidanfr@live.ca"/>
            <FooterIcon icon={<FaLinkedin size="28" />} text="LinkedIn" destination="https://www.linkedin.com/in/aidanfroggatt/"/>
        </div>
    );
};

const FooterIcon = ({ icon, text, destination }) => (
    <a href={destination} target="_blank">
        <div className="footer-icon group">
            {icon}
            <span class="footer-tooltip group-hover:scale-100">
          {text}
        </span>
        </div>
    </a>
);
export default Footer;