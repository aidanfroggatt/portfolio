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
                    <AboutMe info={info}/>
                    <Experience info={info}/>
                    <Awards info={info}/>
                </div>
            }
        </>
    )
}

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
                    transition: {duration: 0.5, ease: 'easeInOut'}
                }}
                exit={{
                    opacity: 0,
                    transition: {duration: 0.25, ease: 'easeInOut'}
                }}
                className="flex flex-col justify-center items-start lg:mt-40 2xl:mt-48 mt-32 pb-10 md:pb-0">
                <div className="flex justify-center items-center flex-row text-custom-light gap-x-2">
                    <Dot/>
                    <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">ABOUT ME</div>
                </div>
                <h1 className="font-bold text-left text-3xl md:text-5xl 2xl:text-7xl leading-[90%] tracking-[-2px]">
                    Here's some more info&nbsp;<span className="text-shadow italic font-accent">about me.</span>
                </h1>
            </motion.div>
            <motion.div
                className="hidden md:py-20 2xl:py-32 md:grid md:grid-cols-2 md:gap-x-12 2xl:gap-x-20"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <div className="flex flex-col md:gap-y-20">
                    <motion.div
                        key={"0"}
                        variants={itemVariants}
                        transition={{duration: 0.5, ease: 'easeInOut', delay: 0.25}}
                        exit={{opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}}}
                    >
                        <Card><img src={info.aboutMe.profilePicture.src} alt={info.aboutMe.profilePicture.alt}/></Card>
                    </motion.div>
                    <div>
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.education.title}</div>
                        <div
                            className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.education.text}</div>
                    </div>
                    <Card><img src={info.aboutMe.cliff.src} alt={info.aboutMe.cliff.alt}/></Card>
                    <div>
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.freetime.title}</div>
                        <div
                            className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.freetime.text}</div>
                    </div>
                    <Card><img src={info.aboutMe.hikingBackpack.src} alt={info.aboutMe.hikingBackpack.alt}/></Card>
                </div>
                <div className="flex flex-col md:gap-y-20">
                    <motion.div
                        key={"1"}
                        variants={itemVariants}
                        transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}
                        exit={{opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}}}
                        className=""
                    >
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.intro.title}</div>
                        <div
                            className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.intro.text}</div>
                    </motion.div>
                    <motion.div
                        key={"2"}
                        variants={itemVariants}
                        transition={{duration: 0.5, ease: 'easeInOut', delay: 0.75}}
                        exit={{opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}}}
                    >
                        <Card><img src={info.aboutMe.aidanHiking.src} alt={info.aboutMe.aidanHiking.alt}/></Card>
                    </motion.div>
                    <div className="">
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.passion.title}</div>
                        <div
                            className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.passion.text}</div>
                    </div>
                    <Card><img src={info.aboutMe.concert.src} alt={info.aboutMe.concert.alt}/></Card>
                    <div className="">
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.conclusion.title}</div>
                        <div
                            className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.conclusion.text}</div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:hidden flex flex-col gap-y-16 md:grid-cols-2 md:py-20 2xl:py-32 md:gap-x-12 2xl:gap-x-20"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    key={"mobile-0"}
                    variants={itemVariants}
                    transition={{duration: 0.5, ease: 'easeInOut', delay: 0.25}}
                    exit={{opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}}}
                >
                    <Card cardContainerClassName="col-start-1 row-start-1 w-full h-fit"><img
                        src={info.aboutMe.profilePicture.src} alt={info.aboutMe.profilePicture.alt}/></Card>
                </motion.div>
                <motion.div
                    key={"mobile-1"}
                    variants={itemVariants}
                    transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}
                    exit={{opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}}}
                    className="col-start-2 row-start-1 flex flex-col gap-y-4">
                    <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.intro.title}</div>
                    <div
                        className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.intro.text}</div>
                </motion.div>
                <motion.div
                    key={"mobile-2"}
                    variants={itemVariants}
                    transition={{duration: 0.5, ease: 'easeInOut', delay: 0.75}}
                    exit={{opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}}}
                >
                    <Card cardContainerClassName="col-start-2 row-start-2 w-full h-fit"><img
                        src={info.aboutMe.aidanHiking.src} alt={info.aboutMe.aidanHiking.alt}/></Card>
                </motion.div>
                <div className="col-start-1 row-start-2 flex flex-col gap-y-4">
                    <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.education.title}</div>
                    <div
                        className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.education.text}</div>
                </div>
                <Card cardContainerClassName="col-start-1 row-start-3 w-full h-fit"><img
                    src={info.aboutMe.cliff.src} alt={info.aboutMe.cliff.alt}/></Card>
                <div className="col-start-2 row-start-3 flex flex-col gap-y-4">
                    <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.passion.title}</div>
                    <div
                        className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.passion.text}</div>
                </div>

                <Card cardContainerClassName="col-start-2 row-start-4 w-full h-fit"><img
                    src={info.aboutMe.concert.src} alt={info.aboutMe.concert.alt}/></Card>
                <div className="col-start-1 row-start-4 flex flex-col gap-y-4">
                    <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.freetime.title}</div>
                    <div
                        className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.freetime.text}</div>
                </div>
                <Card cardContainerClassName="col-start-1 row-start-5 w-full h-fit"><img
                    src={info.aboutMe.hikingBackpack.src} alt={info.aboutMe.hikingBackpack.alt}/></Card>
                <div className="col-start-2 row-start-5 flex flex-col gap-y-4">
                    <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.conclusion.title}</div>
                    <div
                        className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.conclusion.text}</div>
                </div>
            </motion.div>
        </div>
);
}

const Experience = ({
    info
}) => {
    return (
        <div
            className="flex border-t border-opacity-20 border-custom-light py-10 md:py-16 flex-col gap-y-2 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <div className="flex flex-row justify-start items-center gap-x-2 md:gap-x-4">
                <Dot/>
                <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">EXPERIENCE</div>
            </div>
            <div className="flex flex-col gap-y-16 md:gap-y-20 2xl:gap-y-28">
                {info.experience && info.experience.map((exp, index) => {
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
}

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
                    {info.awards && info.awards.map((award, index) => {
                        return (
                            <div key={index} className="flex flex-col items-start justify-start">
                                <div className="font-semibold text-custom-light text-base">{award.title}</div>
                                <div className="text-sm md:text-base 2xl:text-xl text-custom-light text-opacity-50 mt-0.5 md:mt-2">{award.association}</div>
                                <a className="flex flex-row justify-start items-center gap-x-1 text-sm md:text-base duration-200 transition-colors hover:text-custom-light 2xl:text-xl text-custom-light text-opacity-60 mt-2 md:mt-2" href={award.link}>
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
}

export default InfoPage;
