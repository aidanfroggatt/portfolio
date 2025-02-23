import { FiArrowUpRight, FiX } from "react-icons/fi";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Work } from "~/data/work";

interface ProgressBarProps {
  work: Work;
  nextWork: Work;
  targetRef: React.RefObject<HTMLElement>;
}

const ProgressBar = ({ work, nextWork, targetRef }: ProgressBarProps) => {
    const [validTarget, setValidTarget] = useState<React.RefObject<HTMLElement> | null>(null);

    useEffect(() => {
        if (targetRef?.current) {
            setValidTarget(targetRef);
        }
    }, [targetRef]);

    const { scrollYProgress } = useScroll({
        target: validTarget || undefined, // Ensures `useScroll` only runs when `targetRef` is ready
    });

    // Map scroll progress to percentage
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const progressPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const roundedPercentage = useTransform(progressPercentage, (val) => Math.round(val));

    // State to track displayed percentage (avoiding excessive re-renders)
    const [displayPercentage, setDisplayPercentage] = useState(0);
    const [progressState, setProgressState] = useState<"start" | "scrolling" | "complete">("start");

    // Update percentage display and progress state only when necessary
    useMotionValueEvent(roundedPercentage, "change", (latest) => {
        setDisplayPercentage(latest);
        if (latest >= 100 && progressState !== "complete") {
            setProgressState("complete");
        } else if (latest > 0 && latest < 100 && progressState !== "scrolling") {
            setProgressState("scrolling");
        } else if (latest === 0 && progressState !== "start") {
            setProgressState("start");
        }
    });

    return (
        <header className="bg-header-mobile md:bg-header flex flex-row fixed justify-center items-center w-full md:px-14 py-8 text-custom-light z-50 pointer-events-none gap-x-2">
            {/* Close button */}
            <Link to="/" className="flex pointer-events-auto justify-center items-center font-medium bg-custom-light rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur hover:border-opacity-20 w-12 h-12">
                <FiX className="w-6 h-6 font-medium text-xs" />
            </Link>

            {/* Progress bar / Content */}
            <div className="flex pointer-events-auto justify-center items-center font-medium bg-custom-light w-fit h-fit rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur">
                <motion.div
                    key={progressState} // Ensures animation only happens when state changes
                    initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative flex justify-between items-center w-60 h-12 rounded-full gap-x-2 overflow-hidden px-4"
                >
                    {progressState === "start" && (
                        <>
                            <span className="font-medium text-xs text-custom-light text-opacity-60">{work.title}</span>
                            <div className="flex flex-row items-center gap-x-1.5 text-end">
                                <span className="font-medium text-xs w-full">{work.association}</span>
                                <div className="w-[7px] h-[7px] rounded-full" style={{backgroundColor: work.color}} />
                            </div>
                        </>
                    )}
                    {progressState === "scrolling" && (
                        <>
                            <div className="relative flex overflow-hidden rounded-full w-40 h-1">
                                <motion.div
                                    className="absolute top-[50%] translate-y-[-50%] left-0 h-full bg-custom-light z-20"
                                    style={{ width: progressWidth }}
                                />
                                <div className="absolute top-[50%] translate-y-[-50%] h-full w-full bg-custom-light bg-opacity-30 z-10" />
                            </div>
                            <motion.span className="font-medium text-xs text-custom-light text-opacity-60">{displayPercentage}%</motion.span>
                        </>
                    )}
                    {progressState === "complete" && (
                        <>
                            <span className="font-medium text-xs text-custom-light text-opacity-60">Next</span>
                            <div className="flex flex-row items-center gap-x-1.5">
                                <span className="font-medium text-xs">{nextWork.title}</span>
                                <div className="w-[7px] h-[7px] rounded-full" style={{backgroundColor: nextWork.color}} />
                            </div>
                        </>
                    )}
                </motion.div>
            </div>

            {/* Right arrow */}
            <Link
                to={progressState === "complete" ? `/work/${nextWork.id}` : work.navLink}
                onClick={(e) => {
                    if (progressState === "scrolling") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }}
                target={progressState === "start" ? "_blank" : undefined}
                rel={progressState === "start" ? "noreferrer" : undefined}
                className="flex pointer-events-auto justify-center items-center font-medium bg-custom-light rounded-full bg-opacity-5 text-sm border border-opacity-10 border-custom-light backdrop-blur hover:border-opacity-20 w-12 h-12"
                aria-label="Next action"
            >
                <motion.div 
                    animate={{ rotate: progressState === "start" ? 0 : progressState === "complete" ? 45 : -45 }} 
                    transition={{ duration: 0.3 }}
                >
                    <FiArrowUpRight className="w-6 h-6 font-medium text-xs" />
                </motion.div>
            </Link>
        </header>
    );
};

export default ProgressBar;
