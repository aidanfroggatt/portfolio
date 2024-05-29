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
    return (
        <div className="w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <div className="flex flex-col justify-center items-start lg:mt-40 2xl:mt-48 mt-[20vh] pb-[6vh] md:pb-0 md:gap-y-6">
                <div className="flex justify-center items-center flex-row text-custom-light gap-x-3">
                    <Dot/>
                    <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 font-bold">ABOUT ME</div>
                </div>
                <h1 className="font-bold text-left text-4xl md:text-7xl 2xl:text-8xl leading-[90%] tracking-[-2px]">
                    Here's some more info&nbsp;<span className="info-page-title-alt">about me.</span>
                </h1>
            </div>
            <div className="md:py-20 2xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-x-12 2xl:gap-x-20 justify-between w-full">
                <div className="flex flex-col gap-y-20">
                    <Card><img src={info.aboutMe.profilePicture.src} alt={info.aboutMe.profilePicture.alt}/></Card>
                    <div>
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.education.title}</div>
                        <div className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.education.text}</div>
                    </div>
                    <Card><img src={info.aboutMe.cliff.src} alt={info.aboutMe.cliff.alt}/></Card>
                    <div className="">
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.freetime.title}</div>
                        <div className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.freetime.text}</div>
                    </div>
                    <Card><img src={info.aboutMe.hikingBackpack.src} alt={info.aboutMe.hikingBackpack.alt}/></Card>
                </div>
                <div className="flex flex-col gap-y-20">
                    <div className="">
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.intro.title}</div>
                        <div className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.intro.text}</div>
                    </div>
                    <Card><img src={info.aboutMe.aidanHiking.src} alt={info.aboutMe.aidanHiking.alt}/></Card>
                    <div className="">
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.passion.title}</div>
                        <div className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.passion.text}</div>
                    </div>
                    <Card><img src={info.aboutMe.concert.src} alt={info.aboutMe.concert.alt}/></Card>
                    <div className="">
                        <div className="text-custom-light text-lg 2xl:text-2xl">{info.aboutMe.conclusion.title}</div>
                        <div className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{info.aboutMe.conclusion.text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Experience = ({info}) => {
    return (
        <div className="flex flex-col gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <div
                className="flex flex-row justify-start items-center gap-x-4 w-full border-t border-opacity-20 border-custom-light"
                style={{paddingTop: '10vh'}}>
                <Dot/>
                <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 font-bold">EXPERIENCE</div>
            </div>
            <div className="flex flex-col w-full gap-y-10">
                {info.experience && info.experience.map((exp, index) => {
                    return (
                        <div key={index} className="grid grid-cols-2 gap-x-20 justify-start items-start">
                            <div className="flex-grow text-custom-light font-semibold text-4xl text-shadow"><a href={exp.companyWebsite} target="_blank" rel="noopener noreferrer">{exp.company}</a></div>
                            <div className="info-page-text flex flex-col items-start justify-start">
                                <div className="info-page-experience-role">{exp.role}{exp.team && <span>, {exp.team}</span>}</div>
                                <div className="info-page-experience-date mt-2">{exp.startDate} - {exp.endDate}</div>
                                <div className="info-page-experience-date mt-4">{exp.description}</div>
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
        <div className="flex flex-col gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
            <div className="flex flex-row justify-start items-center gap-x-4 w-full border-t border-opacity-20 border-custom-light" style={{paddingTop: '10vh'}}>
                <Dot/>
                <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 font-bold">AWARDS</div>
            </div>
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-2 md:grid-cols-3">
                    { info.awards && info.awards.map((award, index) => {
                        return (
                            <div key={index} className="flex flex-col items-start justify-start">
                                <div className="info-page-awards-title">{award.title}</div>
                                <div className="info-page-awards-text mt-2">{award.association}</div>
                                <a className="flex flex-row justify-start items-center gap-x-1 info-page-awards-link mt-2" href={award.link}>
                                    {extractDomain(award.link)}
                                    <TfiArrowTopRight style={{height: "1.5vmax", width: "auto"}}/>
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
