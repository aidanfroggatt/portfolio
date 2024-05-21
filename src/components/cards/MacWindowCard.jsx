import '../../styles/components/MacWindowCard.css';
import {motion} from "framer-motion";

const MacWindowCard = ({children}) => {
    return (
        <motion.div
            // initial={{
            //     y: 100,
            //     opacity: 0
            // }}
            // animate={{
            //     y: 0,
            //     opacity: 1,
            //     transition: {duration: 0.5, ease: 'easeInOut'}
            // }}
            // exit={{
            //     y: 100,
            //     opacity: 0,
            //     transition: {duration: 0.25, ease: 'easeInOut'}
            // }}
            className="relative flex justify-center items-center p-[0.75vmax] rounded-[2vmax] w-full h-[95vh] bg-[radial-gradient(circle_farthest-side_at_50%_0,_rgba(242,242,242,0.2),rgba(0,0,0,0))] outline outline-[1px] outline-[rgba(242,242,242,0.15)] outline-offset-[-1px] overflow-hidden shadow-[inset_0_0_8px_rgba(0,0,0,0.4),_0_0_60px_rgba(0,0,0,0.2),_0_30px_120px_rgba(0,0,0,0.8)] backdrop-filter-none"
        >
            <div className="absolute bottom-0 left-0 right-0 flex h-[25vh] z-[5] bg-[linear-gradient(to_bottom,_rgba(16,16,16,0),_var(--background)_60%)]"></div>
            <div className="shine-wrapper">
                <div className="shine-small"></div>
                <div className="shine-big"></div>
            </div>
            <div
                className="relative flex justify-center items-center w-full h-full rounded-[1.25vmax] bg-[rgba(16,16,16,0.7)] border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),_0_0_12px_rgba(0,0,0,0.4)] backdrop-blur-[20px]">
                <div className="absolute top-0 flex items-center w-full h-[6vh] pl-[1.25vw] gap-[0.5vw] bg-[linear-gradient(to_right,_rgba(242,242,242,0.1),_rgba(242,242,242,0.5)_50%,_rgba(242,242,242,0.1))] rounded-t-[1.25vmax] shadow-[0_10px_20px_4px_rgba(0,0,0,0.2)] backdrop-blur-[40px]">
                    <div className="inline-block w-[0.75vmax] h-[0.75vmax] bg-[#FF6057] rounded-full border-[0.1vmax] border-[#E14640] shadow-[0_0_20px_2px_#f46b5d]"></div>
                    <div className="inline-block w-[0.75vmax] h-[0.75vmax] bg-[#FFBD2E] rounded-full border-[0.1vmax] border-[#DFA123] shadow-[0_0_20px_2px_#f9bd4e]"></div>
                    <div className="inline-block w-[0.75vmax] h-[0.75vmax] bg-[#27C93F] rounded-full border-[0.1vmax] border-[#1DAD2B] shadow-[0_0_20px_2px_#57c353]"></div>
                </div>
                {children}
            </div>
        </motion.div>
    )
}

export default MacWindowCard;
