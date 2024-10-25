import { Link, useLocation } from "@remix-run/react";
import { FiX, FiAtSign } from "react-icons/fi";
import { TfiArrowTopRight } from "react-icons/tfi";
import LilypadIcon from "~/assets/LilypadIcon";
import IconMenu from "~/components/IconMenu";
import { mobileRoutes, routes, socials } from "~/data/general";

const Header = () => {
    const location = useLocation();

    const navbarContent = ({routes}: {routes: {to: string, name: string}[]}) => {
        return (
            routes.map((route, index) => {
                const active = location.pathname === route.to;
                return (
                    <Link
                        key={index}
                        className={`relative ${active ? 'bg-custom-light bg-opacity-10' : ''} flex justify-center items-center w-20 h-9 rounded-full`}
                        to={route.to}
                    >
                        {route.name}
                        {active && <div id="nav-indicator" className="shadow-tab fixed top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light" />}
                    </Link>
                )
            })
        )
    }

    return (
        <header className="bg-header-mobile md:bg-header flex flex-row fixed justify-center items-center w-full px-14 py-8 text-custom-light z-50 pointer-events-none">
            <div className="pointer-events-auto flex flex-row gap-x-2 items-center fixed sm:left-12 left-6">
                <LilypadIcon className={"w-9 h-9"}/>
                <div className="hidden md:flex flex-col">
                    <div className="font-semibold text-md">Aidan Froggatt</div>
                    <div className="text-xs text-custom-light text-opacity-50">Software Engineer Intern</div>
                </div>
            </div>
            <nav className="hidden md:flex pointer-events-auto justify-center items-center font-medium bg-custom-light w-64 h-12 rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur hover:border-opacity-20">
                {routes && navbarContent({routes})}
            </nav>
            <nav className="md:hidden flex pointer-events-auto justify-center items-center font-medium bg-custom-light w-44 h-12 rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur hover:border-opacity-20">
                {mobileRoutes && navbarContent({routes: mobileRoutes})}
            </nav>
            <div className="pointer-events-auto hidden lg:flex font-medium fixed md:right-3 lg:right-12">
                {socials && socials.map((social, index) => {
                    return (
                        <Link
                            key={index}
                            className="flex flex-row justify-start items-center text-sm px-3 py-2 gap-x-1 hover:bg-custom-light hover:bg-opacity-10 rounded-full"
                            to={social.to}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.name}
                            <TfiArrowTopRight/>
                        </Link>
                    )
                })}
            </div>
            <div className="pointer-events-auto fixed right-6 sm:right-12 lg:hidden flex">
                <IconMenu initialIcon={<FiX className="w-9 h-9"/>} toggleIcon={<FiAtSign className="w-9 h-9"/>} menuOptions={socials}/>
            </div>
        </header>
        
    )
}

export default Header;
