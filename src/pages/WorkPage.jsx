import '../styles/Card.css';
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {GeneralInfoContext} from "../contexts/GeneralInfoContext.jsx";
import Header from "../components/Header.jsx";
import {hexToRGBA} from "../utils/colorUtils.js";
import Loading from "../components/Loading.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import {motion} from "framer-motion";
import Dot from "../components/Dot.jsx";
import Card from "../components/Card.jsx";
import {TfiArrowRight} from "react-icons/tfi";
import {getSiIconByName} from "../utils/iconUtils.jsx";

/**
 * @author Aidan Froggatt
 * @description ProjectCard component
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.association
 * @param {string} props.description
 * @param {string} props.image
 * @param {string} props.imageAlt
 * @param {boolean} props.arrow
 * @param {function} props.handleClick
 * @param {string} props.color
 * @returns {JSX.Element} ProjectCard
 */
const ProjectCard = ({ title='Title', association='Association', description='Description', image, imageAlt, arrow=true, handleClick, color }) => {
    return (
        <Card cardContainerClassName="2xl:h-work-card-2xl lg:h-work-card-lg md:h-work-card-md h-work-card-default" cardContentClassName={"hover:cursor-pointer md:bg-transparent"} onClick={handleClick} cardContentStyle={{'--card-color': color}}>
            <div className="flex flex-col justify-start w-full 2xl:m-10 gap-y-2 m-8">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="2xl:text-4xl text-2xl font-extrabold">{title}</div>
                    {arrow && <TfiArrowRight
                        className="2xl:text-4xl text-2xl 2xl:m-10 transition-transform duration-500 ease-linear"/>}
                </div>
                <div className="2xl:text-xl md:text-base text-sm">{association}&nbsp;<span
                    className="text-custom-light text-opacity-50">— {description}</span></div>
                <img
                    src={image}
                    alt={imageAlt}
                    className="
                        card-image w-auto left-1/2 overflow-hidden absolute flex justify-end items-center content-center
                        2xl:h-work-card-image-2xl lg:h-work-card-image-lg md:h-work-card-image-md h-work-card-image-default
                        -bottom-[15%]
                        "
                />
            </div>
        </Card>
    )
}

const MacWindowCard = ({generalInfo}) => {
    return (
        <Card cardContainerClassName="hidden md:flex lg:mt-40 2xl:mt-48" cardContentClassName="flex justify-center items-center relative 2xl:w-page-2xl 2xl:h-mac-window-card-2xl lg:w-page-lg lg:h-mac-window-card-lg md:w-page-md md:h-mac-window-card-md w-work-card-default h-work-card-default">
            <div
                className="absolute bottom-0 left-0 right-0 flex h-[25vh] z-[5] bg-[linear-gradient(to_bottom,_rgba(16,16,16,0),_var(--background)_60%)]"></div>
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
                <div
                    className="font-bold text-left top-[30%] left-[15%] inline-block absolute text-7xl 2xl:text-8xl leading-[90%] tracking-[-2px] text-shadow">Hi,
                    I&apos;m&nbsp;<span
                        className="italic font-accent">{generalInfo.firstName}.</span></div>
                <div
                    className="right-[15%] bottom-[35%] flex flex-col absolute text-custom-light text-lg 2xl:text-2xl">
                    <div
                        className="font-bold flex flex-row justify-center items-center">{generalInfo.currentRole.title} at &nbsp;{getSiIconByName({iconName: generalInfo.currentRole.company.icon, className: "md:h-10 2xl:h-14 w-auto"})}
                    </div>
                    <div className="text-custom-light text-opacity-50">Based
                        in {generalInfo.location}.
                    </div>
                </div>
            </div>
        </Card>
    )
}

/**
 * @author Aidan Froggatt
 * @description WorkPage component
 * @returns {JSX.Element} WorkPage
 */
const WorkPage = () => {
    const generalInfo = useContext(GeneralInfoContext);
    const [projects, setProjects] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const handleProjectClick = ({projectID}) => {
        navigate(`/${projectID}`);
    }

    useEffect(() => {
        getDataFromFirestore({
            collectionName: 'projects',
            fields: ['title', 'association', 'description', 'image', 'color']
        }).then(data => {
            setProjects(data);
            setIsLoading(false);
        });
    }, []);


    const containerVariants = {
        hidden: {opacity: 1},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {y: 100, opacity: 0},
        show: {y: 0, opacity: 1}
    };

    return (
        <>
            <Header/>
            <ScrollToTop/>
            {isLoading ? <Loading/> :
                <div
                    className="bg-main-page-mobile md:bg-work-page bg-no-repeat relative md:pb-40 2xl:pb-60 min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light">
                    {generalInfo &&
                        <motion.div
                            key={"work-page-hero"}
                            className="w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl flex flex-col justify-center items-start md:items-center relative z-10  border-b border-opacity-10 border-custom-light"
                            initial={{
                                y: 100,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {duration: 0.5, ease: 'easeInOut'}
                            }}
                            exit={{
                                opacity: 0,
                                transition: {duration: 0.25, ease: 'easeInOut'}
                            }}>
                            <MacWindowCard generalInfo={generalInfo}/>
                            <div className="md:hidden flex flex-col justify-start items-start lg:mt-40 2xl:mt-48 mt-32 pb-10 md:pb-0">
                                <div className="flex flex-row justify-center items-center text-custom-light text-sm md:text-lg 2xl:text-2xl gap-x-2">
                                    <Dot/>
                                    <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">WELCOME</div>
                                </div>
                                <div
                                    className="font-bold text-left text-5xl md:text-7xl 2xl:text-8xl leading-[90%] tracking-[-2px] pb-10 text-shadow-mobile md:text-shadow">Hi,
                                    I&apos;m&nbsp;<span className="italic font-accent">{generalInfo.firstName}.</span>
                                </div>
                                <div className="flex flex-row justify-center items-center font-bold">{generalInfo.currentRole.title} at &nbsp;{getSiIconByName({iconName: generalInfo.currentRole.company.icon, className: "h-8 w-auto"})}
                                </div>
                                <div className="text-custom-light text-opacity-50">Based in {generalInfo.location}.</div>
                            </div>
                        </motion.div>
                    }
                    <motion.div
                        className="flex flex-col gap-y-8 md:gap-y-10 2xl:gap-y-16 py-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {projects && Object.keys(projects).map((key) => (
                            <motion.div
                                key={key}
                                variants={itemVariants}
                                transition={{duration: 0.5, ease: 'easeInOut', delay: 0.25}}
                                exit={{opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}}}
                            >
                                <ProjectCard
                                    key={key}
                                    title={projects[key].title}
                                    association={projects[key].association}
                                    description={projects[key].description}
                                    image={projects[key].image.src}
                                    imageAlt={projects[key].image.alt}
                                    handleClick={() => handleProjectClick({projectID: key})}
                                    color={hexToRGBA(projects[key].color, 0.5)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            }
        </>
    )
}

export default WorkPage;
