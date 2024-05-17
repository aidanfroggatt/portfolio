import '../styles/pages/InfoPage.css';
import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";
import Card from "../components/cards/Card.jsx";
import { useEffect, useState } from "react";
import { getDataFromFirestore } from "../utils/firestoreUtils.js";

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
            <Header />
            {isLoading ? <Loading /> :
                <div className="info-page">
                    <AboutMe info={info}/>
                    <Experience info={info}/>
                </div>
            }
        </>
    )
}

const AboutMe = ({ info }) => {
    return (
        <>
            <div className="flex flex-col gap-y-8">
                <div className="flex flex-row justify-start items-center gap-x-4">
                    <div className="dot"></div>
                    <h2 className="info-page-subtitle">ABOUT ME</h2>
                </div>
                <h1 className="info-page-title">Here's some more info&nbsp;<span className="info-page-title-alt">about me.</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 justify-between w-full">
                <div className="flex flex-col gap-y-20">
                    <Card><img src={info.aboutMe[0].src} alt={info.aboutMe[0].alt}/></Card>
                    <div className="info-page-text">{info.aboutMe[2].text}</div>
                    <Card><img src={info.aboutMe[4].src} alt={info.aboutMe[4].alt}/></Card>
                </div>
                <div className="flex flex-col gap-y-20">
                    <div className="info-page-text">{info.aboutMe[1].text}</div>
                    <Card><img src={info.aboutMe[3].src} alt={info.aboutMe[3].alt}/></Card>
                    <div className="info-page-text">{info.aboutMe[5].text}</div>
                </div>
            </div>
        </>
    );
}

const Experience = ({ info }) => {
    return (
        <>
            <div className="flex flex-row justify-start items-center gap-x-4">
                <div className="dot"></div>
                <h2 className="info-page-subtitle">EXPERIENCE</h2>
            </div>
            <div className="flex flex-col w-full">
                { info.experience && info.experience.map((exp, index) => {
                    return (
                        <div key={index} className="grid grid-cols-2 gap-x-20 justify-start items-start">
                            <div className="flex-grow">{exp.company}</div>
                            <div className="info-page-text flex flex-col items-start justify-start">
                                <div className="text-custom-light">{exp.role}</div>
                                <div className="text-opacity-50 text-custom-light">{exp.startDate} - {exp.endDate}</div>
                                <div className="text-opacity-50 text-custom-light">{exp.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default InfoPage;
