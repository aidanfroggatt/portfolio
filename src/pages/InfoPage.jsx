import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";
import Card from "../components/Card.jsx";
import React, {useEffect, useState} from "react";
import {getDataFromFirestore} from "../utils/firestoreUtils.js";
import {extractDomain} from "../utils/urlUtils.js";
import ScrollToTop from "../components/ScrollToTop.jsx";
import {TfiArrowTopRight} from "react-icons/tfi";
import Dot from "../components/Dot.jsx";
import {motion} from "framer-motion";

/**
 * @author Aidan Froggatt
 * @description InfoPage component
 * @returns {JSX.Element} InfoPage
 */
const InfoPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState();
    const documentId = import.meta.env.VITE_MY_FIRESTORE_GENERAL_INFO_DOCUMENT_ID;

    const transformData = (data) => {
        const userInfo = data[documentId];
        return {
            userID: documentId,
            ...userInfo
        };
    };

    useEffect(() => {
        getDataFromFirestore({ collectionName: 'general-info', documentId: documentId }).then(data => {
            setInfo(transformData(data));
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <Header/>
            <ScrollToTop/>
            {isLoading ? <Loading/> :
                <div className="info-page flex flex-col justify-start items-center bg-custom-dark text-custom-light">
                    <AboutMe info={info.aboutMe}/>
                    <Experience info={info.experience}/>
                    <Awards info={info.awards}/>
                </div>
            }
        </>
    );
};

/**
 * @author Aidan Froggatt
 * @description AboutMe component
 * @param {Object} props
 * @param {Object[]} props.info
 * @returns {JSX.Element} AboutMe
 */
const AboutMe = ({ info }) => {

    const containerVariants = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    // Render content based on the type of item
    const renderContent = (item, index) => {
        const commonMotionProps = {
            key: `item-${index}`,
            variants: itemVariants,
            transition: { duration: 0.5, ease: 'easeInOut', delay: index * 0.25 + 0.25 },
            exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }
        };

        if (item.type === 'image') {
            return (
                <motion.div {...commonMotionProps}>
                    <Card cardContainerClassName="w-full h-fit">
                        <img src={item.src} alt={item.alt} />
                    </Card>
                </motion.div>
            );
        } else if (item.type === 'text') {
            return (
                <motion.div {...commonMotionProps} className="flex flex-col gap-y-4">
                    <div className="text-custom-light text-lg 2xl:text-2xl">{item.title}</div>
                    <div className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{item.text}</div>
                </motion.div>
            );
        }

        return null; // Return null if the item type is neither 'image' nor 'text'
    };

    const mobileContent = info.map(renderContent);

    const desktopContentLeft = [
        info[0], // Profile Picture
        info[3], // Education
        info[4], // Cliff Image
        info[7], // Freetime
        info[8]  // Hiking Backpack Image
    ].map((item, index) => renderContent(item, index));

    const desktopContentRight = [
        info[1], // Intro
        info[2], // Aidan Hiking
        info[5], // Passion
        info[6], // Concert Image
        info[9]  // Conclusion
    ].map((item, index) => renderContent(item, index));

    return (
        <div className="flex flex-col pb-10 md:pb-0 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <motion.div
                key={"about-me-hero"}
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.25, ease: 'easeInOut' }
                }}
                className="flex flex-col justify-center items-start lg:mt-40 2xl:mt-48 mt-32 pb-10 md:pb-0">
                <div className="flex justify-center items-center flex-row text-custom-light gap-x-2">
                    <Dot />
                    <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">ABOUT ME</div>
                </div>
                <h1 className="font-bold text-left text-3xl md:text-5xl 2xl:text-7xl leading-[90%] tracking-[-2px]">
                    Here's some more info&nbsp;<span className="text-shadow italic font-accent">about me.</span>
                </h1>
            </motion.div>

            {/* Mobile Version */}
            <motion.div
                className="md:hidden flex flex-col gap-y-16 md:grid-cols-2 md:py-20 2xl:py-32 md:gap-x-12 2xl:gap-x-20"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {mobileContent}
            </motion.div>

            {/* Desktop Version */}
            <motion.div
                className="hidden md:py-20 2xl:py-32 md:grid md:grid-cols-2 md:gap-x-12 2xl:gap-x-20"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <div className="flex flex-col md:gap-y-20">
                    {desktopContentLeft}
                </div>
                <div className="flex flex-col md:gap-y-20">
                    {desktopContentRight}
                </div>
            </motion.div>
        </div>
    );
};

/**
 * @author Aidan Froggatt
 * @description Experience component
 * @param {Object} props
 * @param {Object[]} props.info
 * @returns {JSX.Element} Experience
 */
const Experience = ({info}) => {
    return (
        <div
            className="flex border-t border-opacity-20 border-custom-light py-10 md:py-16 flex-col gap-y-2 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <div className="flex flex-row justify-start items-center gap-x-2 md:gap-x-4">
                <Dot/>
                <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">EXPERIENCE</div>
            </div>
            <div className="flex flex-col gap-y-16 md:gap-y-20 2xl:gap-y-28">
                {info && info.map((exp, index) => {
                    return (
                        <div key={index}
                             className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 justify-start items-start">
                            <div
                                className="md:flex-grow text-custom-light font-semibold text-2xl 2xl:text-5xl md:text-4xl text-shadow">
                                <a href={exp.companyWebsite} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                            </div>
                            <div className="flex flex-col items-start justify-start">
                                <div
                                    className="font-semibold text-custom-light text-base md:text-xl 2xl:text-2xl mt-3 md:mt-0">{exp.role}{exp.team &&
                                    <span>, {exp.team}</span>}</div>
                                <div
                                    className="text-custom-light text-opacity-50 text-sm md:text-base 2xl:text-lg mt-0.5 md:mt-1.5 2xl:mt-2">{exp.startDate} - {exp.endDate}</div>
                                <div
                                    className="text-custom-light text-opacity-60 text-sm md:text-base 2xl:text-lg mt-3 md:mt-4 2xl:mt-6">{exp.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/**
 * @author Aidan Froggatt
 * @description Awards component
 * @param {Object} props
 * @param {Object[]} props.info
 * @returns {JSX.Element} Awards
 */
const Awards = ({info}) => {
    return (
        <div
            className="flex flex-col border-t border-opacity-20 border-custom-light gap-y-2 py-10 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <div className="flex flex-row justify-start items-center gap-x-4">
                <Dot/>
                <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">AWARDS</div>
            </div>
            <div className="flex flex-col">
                <div className="grid grid-cols-2 md:grid-cols-3">
                    {info && info.map((award, index) => {
                        return (
                            <div key={index} className="flex flex-col items-start justify-start">
                                <div className="font-semibold text-custom-light text-base">{award.title}</div>
                                <div className="text-sm md:text-base 2xl:text-xl text-custom-light text-opacity-50 mt-0.5 md:mt-2">{award.association}</div>
                                <a className="flex flex-row justify-start items-center gap-x-1 text-sm md:text-base duration-200 transition-colors hover:text-custom-light 2xl:text-xl text-custom-light text-opacity-60 mt-2 md:mt-2"
                                   href={award.link}
                                   target="_blank"
                                >
                                    {extractDomain(award.link)}
                                    <TfiArrowTopRight/>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
