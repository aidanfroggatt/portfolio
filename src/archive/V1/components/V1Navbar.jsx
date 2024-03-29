import {FaFileAlt, FaInfoCircle, FaLightbulb, FaUser} from 'react-icons/fa';
import React from "react";
import {useNavigate} from "react-router-dom";

const V1Navbar = () => {
    let navigate = useNavigate()
    const goToDestination = (destination) => {
        navigate(destination)
    }

    return (
        <div className="fixed top-0 h-16 w-screen flex bg-gray-900 flex-row justify-center shadow-lg gap-8 xl:gap-32 z-50">
            <NavBarIcon icon={<FaUser size="28" />} text="About" destination={() => goToDestination('/v1Home')}/>
            <NavBarIcon icon={<FaLightbulb size="28" />} text="Projects" destination={() => goToDestination('/v1projects')}/>
            <NavBarIcon icon={<FaFileAlt size="28" />} text="Resume" destination={() => goToDestination('/v1resume')}/>
            <NavBarIcon icon={<FaInfoCircle size="28" />} text="Contact" destination={() => goToDestination('/v1contact')}/>
        </div>
    );
};

const NavBarIcon = ({ icon, text, destination }) => (
    <a onClick={destination}>
        <div className="navbar-icon group">
            {icon}
            <span className="navbar-tooltip xl:group-hover:scale-100">
                {text}
            </span>
        </div>
    </a>
);
export default V1Navbar;
