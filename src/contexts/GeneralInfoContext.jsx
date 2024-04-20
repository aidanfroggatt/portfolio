import React, {createContext, useEffect, useState} from 'react';
import {getDataFromFirestore} from '../utils/firestoreUtils.js';

const GeneralInfoContext = createContext();

const GeneralInfoProvider = ({ children }) => {
    const documentId = import.meta.env.VITE_MY_FIRESTORE_GENERAL_INFO_DOCUMENT_ID;
    const [generalInfo, setGeneralInfo] = useState(null);

    const transformData = (data) => {
        const userId = Object.keys(data)[0]; // Assuming there's only one key, which is the user ID
        const userInfo = data[userId];
        return {
            userID: userId,
            ...userInfo
        };
    };

    useEffect(() => {
        getDataFromFirestore({collectionName: 'general-info', documentId: documentId}).then(data => setGeneralInfo(transformData(data)));
    }, []);

    return (
        <GeneralInfoContext.Provider value={generalInfo}>
            {children}
        </GeneralInfoContext.Provider>
    );
};

export { GeneralInfoProvider, GeneralInfoContext };
