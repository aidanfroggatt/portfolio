import '../styles/components/MacWindowCard.css';

const MacWindowCard = ({children}) => {
    return (
        <div className="
            relative flex justify-center items-center
            bg-[radial-gradient(circle_farthest-side_at_50%_0,_rgba(242,242,242,0.2),rgba(0,0,0,0))] outline outline-[1px] outline-[rgba(242,242,242,0.15)] outline-offset-[-1px] overflow-hidden backdrop-filter-none
            2xl:w-page-2xl 2xl:h-mac-window-card-2xl lg:w-page-lg lg:h-mac-window-card-lg md:w-page-md md:h-mac-window-card-md w-work-card-default h-work-card-default
            border-1 border-solid border-custom-light border-opacity-10 rounded-3xl p-2 bg-custom-light bg-opacity-4 shadow-card
        ">
            <div className="absolute bottom-0 left-0 right-0 flex h-[25vh] z-[5] bg-[linear-gradient(to_bottom,_rgba(16,16,16,0),_var(--background)_60%)]"></div>
            <div className="shine-wrapper">
                <div className="shine-small"></div>
                <div className="shine-big"></div>
            </div>
            <div
                className="relative flex justify-center items-center w-full h-full rounded-[1.25vmax] bg-[rgba(16,16,16,0.7)] border border-[rgba(242,242,242,0.3)] shadow-[inset_0_0_10px_rgba(0,0,0,0.1),_0_0_12px_rgba(0,0,0,0.4)]">
                <div className="absolute top-0 flex items-center w-full pl-[1.25vw] bg-[linear-gradient(to_right,_rgba(242,242,242,0.1),_rgba(242,242,242,0.5)_50%,_rgba(242,242,242,0.1))] rounded-t-[1.25vmax] shadow-[0_10px_20px_4px_rgba(0,0,0,0.2)]
                    sm:h-[6vh] 2xl:h-mac-window-header-2xl lg:h-mac-window-header-lg md:h-mad-window-header-md
                    2xl:gap-x-mac-window-dots-2xl lg:gap-x-mac-window-dots-lg md:gap-x-mac-window-dots-md gap-x-2
                ">
                    <div
                        className="inline-block bg-[#FF6057] rounded-full border-[0.1vmax] border-[#E14640] shadow-[0_0_20px_2px_#f46b5d]
                        md:h-mac-window-dot-md md:w-mac-window-dot-md lg:h-mac-window-dot-lg lg:w-mac-window-dot-lg 2xl:h-mac-window-dot-2xl 2xl:w-mac-window-dot-2xl"
                    ></div>
                    <div
                        className="inline-block bg-[#FFBD2E] rounded-full border-[0.1vmax] border-[#DFA123] shadow-[0_0_20px_2px_#f9bd4e]
                        md:h-mac-window-dot-md md:w-mac-window-dot-md lg:h-mac-window-dot-lg lg:w-mac-window-dot-lg 2xl:h-mac-window-dot-2xl 2xl:w-mac-window-dot-2xl"
                    ></div>
                    <div
                        className="inline-block bg-[#27C93F] rounded-full border-[0.1vmax] border-[#1DAD2B] shadow-[0_0_20px_2px_#57c353]
                        md:h-mac-window-dot-md md:w-mac-window-dot-md lg:h-mac-window-dot-lg lg:w-mac-window-dot-lg 2xl:h-mac-window-dot-2xl 2xl:w-mac-window-dot-2xl"
                    ></div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MacWindowCard;
