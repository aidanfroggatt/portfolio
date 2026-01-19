import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';

interface SlideTabsProps {
  tabs: Record<string, string>;
}

const SlideTabs = ({ tabs }: SlideTabsProps) => {
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
      {/* Transform the object into an array for mapping */}
      {Object.entries(tabs).map(([name, url], index) => (
        <Tab key={index} setPosition={setPosition} label={name} to={url} />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  label: string;
  to: string;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
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
        onFocus={updateCursor}
        onBlur={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
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
      className="absolute h-9 rounded-full bg-custom-light/10"
    />
  );
};

export default SlideTabs;
