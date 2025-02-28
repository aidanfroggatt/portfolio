import { Link, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { FiX, FiAtSign } from "react-icons/fi";
import { TfiArrowTopRight } from "react-icons/tfi";
import LilypadIcon from "~/assets/LilypadIcon";
import IconMenu from "~/components/IconMenu";
import { mobileRoutes, routes, socials } from "~/data/general";
import { useState, useRef } from "react";

const Header = () => {
    const location = useLocation();

    const navbarContent = ({routes}: {routes: {to: string, name: string}[]}) => {
        return (
            routes.map((route, index) => {
                const active = location.pathname === route.to;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Link
                            className={`relative ${active ? 'bg-custom-light bg-opacity-10' : ''} flex justify-center items-center w-20 h-9 rounded-full`}
                            to={route.to}
                        >
                            {route.name}
                            {active && <div id="nav-indicator" className="shadow-tab fixed top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light" />}
                        </Link>
                    </motion.div>
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
                <SlideTabs tabs={socials}/>
            </div>
            <div className="pointer-events-auto fixed right-6 sm:right-12 lg:hidden flex">
                <IconMenu initialIcon={<FiX className="w-9 h-9"/>} toggleIcon={<FiAtSign className="w-9 h-9"/>} menuOptions={socials}/>
            </div>
        </header>
        
    )
}

interface SlideTabsProps {
    tabs: {
        name: string;
        to: string;
    }[]
}

const SlideTabs = ({tabs}: SlideTabsProps) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full"
    >
        {tabs.map((tab, index) => (
            <Tab key={index} setPosition={setPosition} label={tab.name} to={tab.to}/>
        ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  label: string;
  to: string;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
}

const Tab = ({ label, to, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const updateCursor = () => {
    if (!ref?.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <li ref={ref}>
      <Link
        to={to}
        className="relative z-10 flex items-center flex-row cursor-pointer mix-blend-difference text-sm px-3 py-2 gap-x-1 rounded-full"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={updateCursor}
        onFocus={updateCursor} // Handles keyboard navigation
        onBlur={() => setPosition((prev) => ({ ...prev, opacity: 0 }))} // Hide cursor on blur
      >
        {label}
        <TfiArrowTopRight />
      </Link>
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute h-9 rounded-full bg-custom-light bg-opacity-10"
    />
  );
};

export default Header;
