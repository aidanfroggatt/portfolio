import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiAtSign, FiX } from 'react-icons/fi';
import { TfiArrowTopRight } from 'react-icons/tfi';
import IconMenu from '~/components/IconMenu';
import LilypadIcon from '~/components/LilypadIcon';
import SlideTabs from '~/components/SlideTabs';
import { socials } from '~/data/general';

const Header404 = () => {
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
    <header className="bg-header-mobile md:bg-header flex flex-row fixed justify-center items-center w-full px-14 py-8 text-custom-light z-50 pointer-events-none">
      {/* Left logo + name */}
      <div className="pointer-events-auto flex flex-row gap-x-2 items-center fixed sm:left-12 left-6">
        <LilypadIcon className={'w-9 h-9'} />
        <div className="hidden md:flex flex-col">
          <div className="font-semibold text-md">Aidan Froggatt</div>
          <div className="text-xs text-custom-light/50">Software Engineer Intern</div>
        </div>
      </div>

      {/* Center nav with animated background */}
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

      {/* Desktop social tabs */}
      <div className="pointer-events-auto hidden lg:flex font-medium fixed md:right-3 lg:right-12">
        <SlideTabs tabs={socials} />
      </div>

      {/* Mobile menu */}
      <div className="pointer-events-auto fixed right-6 sm:right-12 lg:hidden flex">
        <IconMenu
          initialIcon={<FiX className="w-9 h-9" />}
          toggleIcon={<FiAtSign className="w-9 h-9" />}
          menuOptions={socials}
        />
      </div>
    </header>
  );
};

export default Header404;
