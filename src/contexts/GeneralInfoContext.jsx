import React, {createContext, useEffect, useState} from 'react';
import {getDataFromFirestore} from '../utils/firestoreUtils.js';

const GeneralInfoContext = createContext();

/**
 * @author Aidan Froggatt
 * @description GeneralInfoProvider component to provide general info to the app
 * @param children
 * @returns {JSX.Element} GeneralInfoProvider
 */
const GeneralInfoProvider = ({ children }) => {
    const documentId = import.meta.env.VITE_MY_FIRESTORE_GENERAL_INFO_DOCUMENT_ID;
    const [generalInfo, setGeneralInfo] = useState(null);

    const transformData = (data) => {
        const userInfo = data[documentId];
        return {
            userID: documentId,
            ...userInfo
        };
    };

    useEffect(() => {
        getDataFromFirestore({collectionName: 'general-info', documentId: documentId, fields: ["currentRole", "firstName", "lastName", "links", "location"]}).then(data => setGeneralInfo(transformData(data)));
    }, []);

    return (
        <GeneralInfoContext.Provider value={generalInfo}>
            {children}
        </GeneralInfoContext.Provider>
    );
};

export { GeneralInfoProvider, GeneralInfoContext };
