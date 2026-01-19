import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';
import { FiAtSign, FiX } from 'react-icons/fi';
import { TfiArrowTopRight } from 'react-icons/tfi';
import IconMenu from '~/components/IconMenu';
import LilypadIcon from '~/components/LilypadIcon';
import SlideTabs from '~/components/SlideTabs';
import { config } from '~/data/config';

const HeaderShell = ({ children }: { children: ReactNode }) => {
  return (
    <header className="bg-header-mobile md:bg-header flex flex-row fixed justify-center items-center w-full px-14 py-8 text-custom-light z-50 pointer-events-none">
      {/* Left: Logo & Name */}
      <div className="pointer-events-auto flex flex-row gap-x-2 items-center fixed sm:left-12 left-6">
        <LilypadIcon className={'w-9 h-9'} />
        <div className="hidden md:flex flex-col">
          <div className="font-semibold text-md">{config.name}</div>
          <div className="text-xs text-custom-light/50">{config.jobTitle}</div>
        </div>
      </div>

      {/* Center: Dynamic Navigation Content */}
      {children}

      {/* Right: Desktop Socials */}
      <div className="pointer-events-auto hidden lg:flex font-medium fixed md:right-3 lg:right-12">
        <SlideTabs tabs={config.socials} />
      </div>

      {/* Right: Mobile Menu */}
      <div className="pointer-events-auto fixed right-6 sm:right-12 lg:hidden flex">
        <IconMenu
          initialIcon={<FiX className="w-9 h-9" />}
          toggleIcon={<FiAtSign className="w-9 h-9" />}
          menuOptions={config.socials}
        />
      </div>
    </header>
  );
};

export const Header = () => {
  const location = useLocation();

  const navbarContent = ({ routes }: { routes: Record<string, string> }) => {
    return Object.entries(routes).map(([name, to], index) => {
      const active = location.pathname === to;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Link
            className={`relative ${active ? 'bg-custom-light/10' : ''} flex justify-center items-center w-20 h-9 rounded-full`}
            to={to}
          >
            {name}
            {active && (
              <div
                id="nav-indicator"
                className="shadow-tab fixed top-0 transform -mt-0.5 w-6 h-0.5 rounded-t-full bg-custom-light"
              />
            )}
          </Link>
        </motion.div>
      );
    });
  };

  return (
    <HeaderShell>
      {/* Desktop Nav */}
      <nav className="hidden md:flex pointer-events-auto justify-center items-center font-medium bg-custom-light/5 w-64 h-12 rounded-full text-sm border border-custom-light/10 backdrop-blur hover:border-custom-light/20">
        {config.routes && navbarContent({ routes: config.routes })}
      </nav>
      {/* Mobile Nav */}
      <nav className="md:hidden flex pointer-events-auto justify-center items-center font-medium bg-custom-light/5 w-44 h-12 rounded-full text-sm border border-custom-light/10 backdrop-blur hover:border-custom-light/20">
        {config.mobileRoutes && navbarContent({ routes: config.mobileRoutes })}
      </nav>
    </HeaderShell>
  );
};

export const HeaderNotFound = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [bgPos, setBgPos] = useState({ left: 0, width: 0, opacity: 0 });

  const showCursor = () => {
    if (!linkRef.current) return;
    const { offsetLeft, offsetWidth } = linkRef.current;
    setBgPos({ left: offsetLeft, width: offsetWidth, opacity: 1 });
  };

  const hideCursor = () => {
    setBgPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <HeaderShell>
      <nav className="flex pointer-events-auto justify-center items-center font-medium bg-custom-light/5 w-44 md:w-64 h-12 rounded-full text-sm border border-custom-light/10 backdrop-blur relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-40 md:w-60"
        >
          <motion.div
            className="absolute h-9 rounded-full bg-custom-light/10"
            animate={bgPos}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <Link
            ref={linkRef}
            className="relative z-10 gap-x-1 flex flex-row justify-center items-center h-9 rounded-full"
            to={'/'}
            onMouseEnter={showCursor}
            onMouseLeave={hideCursor}
            onFocus={showCursor}
            onBlur={hideCursor}
          >
            {'Return Home'}
            <TfiArrowTopRight />
          </Link>
        </motion.div>
      </nav>
    </HeaderShell>
  );
};

export default Header;
