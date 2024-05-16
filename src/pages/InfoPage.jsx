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
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-row justify-start items-center gap-x-2">
                            <div className="dot"></div>
                            <h2 className="info-page-subtitle">ABOUT ME</h2>
                        </div>
                        <h1 className="info-page-title">Here's some more info&nbsp;<span className="info-page-title-alt">about me.</span></h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between w-full">
                        <div className="">
                            <img src={info.aboutMe[0].src} alt={info.aboutMe[0].alt}/>
                            <div className="info-page-text">{info.aboutMe[2].text}</div>
                            <img src={info.aboutMe[4].src} alt={info.aboutMe[4].alt}/>
                        </div>
                        <div className="">
                            <div className="info-page-text">{info.aboutMe[1].text}</div>
                            <img src={info.aboutMe[3].src} alt={info.aboutMe[3].alt}/>
                            <div className="info-page-text">{info.aboutMe[5].text}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default InfoPage;
