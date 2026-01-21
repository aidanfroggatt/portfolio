import { Link } from '@remix-run/react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { CSSProperties, RefObject, useEffect, useState } from 'react';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { hexToRGBA } from '~/lib/color';

interface ProgressBarProject {
  id: string;
  title: string;
  association?: string;
  color: string;
  navLink?: string | null;
}

interface ProgressBarProps {
  work: ProgressBarProject;
  nextWork: ProgressBarProject;
  targetRef: RefObject<HTMLElement>;
}

const ProgressBar = ({ work, nextWork, targetRef }: ProgressBarProps) => {
  const [validTarget, setValidTarget] = useState<RefObject<HTMLElement> | null>(null);

  useEffect(() => {
    if (targetRef?.current) {
      setValidTarget(targetRef);
    }
  }, [targetRef]);

  const { scrollYProgress } = useScroll({
    target: validTarget || undefined,
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const progressPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const roundedPercentage = useTransform(progressPercentage, (val) => Math.round(val));

  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [progressState, setProgressState] = useState<'start' | 'scrolling' | 'complete'>('start');

  useMotionValueEvent(roundedPercentage, 'change', (latest) => {
    setDisplayPercentage(latest);
    if (latest >= 100 && progressState !== 'complete') {
      setProgressState('complete');
    } else if (latest > 0 && latest < 100 && progressState !== 'scrolling') {
      setProgressState('scrolling');
    } else if (latest === 0 && progressState !== 'start') {
      setProgressState('start');
    }
  });

  const currentLink = work.navLink || '#';

  return (
    <header className="bg-header-mobile md:bg-header flex flex-row fixed justify-between px-6 md:px-0 md:justify-center items-center w-full py-8 text-custom-light z-50 pointer-events-none gap-x-2">
      {/* Close button */}
      <Link
        to="/"
        className="flex pointer-events-auto justify-center items-center font-medium bg-custom-light/5 rounded-full text-sm border border-custom-light/10 backdrop-blur hover:border-custom-light/20 w-12 h-12"
      >
        <FiX className="w-6 h-6 font-medium text-xs" />
      </Link>

      {/* Progress bar / Content */}
      <div className="relative flex pointer-events-auto justify-center items-center font-medium bg-custom-light/5 w-fit h-fit rounded-full text-sm border border-custom-light/10 backdrop-blur">
        <motion.div
          key={progressState}
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={
            progressState === 'start' && work.color
              ? ({
                  '--project-color': hexToRGBA(work.color, 0.5),
                  '--selection-text-color': '#f2f2f2',
                } as CSSProperties)
              : progressState === 'complete' && nextWork.color
                ? ({
                    '--project-color': hexToRGBA(nextWork.color, 0.5),
                    '--selection-text-color': '#f2f2f2',
                  } as CSSProperties)
                : {}
          }
          className="project-selection relative flex justify-between items-center w-52 md:w-64 h-12 rounded-full gap-x-2 overflow-hidden px-4"
        >
          {progressState === 'start' && (
            <>
              <span className="font-medium text-xs text-custom-light/60">{work.title}</span>
              <div className="flex flex-row items-center gap-x-1.5 text-end">
                <span className="font-medium text-xs w-fit">{work.association}</span>
                <div
                  className="shrink-0 w-[6px] h-[6px] rounded-full"
                  style={{
                    backgroundColor: work.color,
                    boxShadow: `0 0 3px ${work.color}`,
                  }}
                />
              </div>
            </>
          )}
          {progressState === 'scrolling' && (
            <>
              <div className="relative flex overflow-hidden rounded-full w-[8.5rem] md:w-[11.5rem] h-1">
                <motion.div
                  className="absolute top-[50%] translate-y-[-50%] left-0 h-full bg-custom-light z-20"
                  style={{ width: progressWidth }}
                />
                <div className="absolute top-[50%] translate-y-[-50%] h-full w-full bg-custom-light/30 z-10" />
              </div>
              <motion.span className="font-medium text-xs text-custom-light/60">
                {displayPercentage}%
              </motion.span>
            </>
          )}
          {progressState === 'complete' && (
            <>
              <span className="font-medium text-xs text-custom-light/60">Next</span>
              <div className="flex flex-row items-center gap-x-1.5 text-end">
                <span className="font-medium text-xs w-full">{nextWork.title}</span>
                <div
                  className="shrink-0 w-[6px] h-[6px] rounded-full"
                  style={{
                    backgroundColor: nextWork.color,
                    boxShadow: `0 0 3px ${nextWork.color}`,
                  }}
                />
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Right arrow */}
      <Link
        to={progressState === 'complete' ? `/work/${nextWork.id}` : currentLink}
        onClick={(e) => {
          if (progressState === 'scrolling') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (progressState === 'start' && !work.navLink) {
            e.preventDefault();
          }
        }}
        target={progressState === 'start' ? '_blank' : undefined}
        rel={progressState === 'start' ? 'noreferrer' : undefined}
        className="flex relative pointer-events-auto justify-center items-center font-medium bg-custom-light/5 rounded-full text-sm border border-custom-light/10 backdrop-blur hover:border-custom-light/20 w-12 h-12"
        aria-label="Next action"
      >
        <motion.div
          animate={{
            rotate: progressState === 'start' ? 0 : progressState === 'complete' ? 45 : -45,
          }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowUpRight className="w-6 h-6 font-medium text-xs" />
        </motion.div>
      </Link>
    </header>
  );
};

export default ProgressBar;
