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

    const getData = async ({ collection, setData, documentId }) => {
        try {
            const response = await getDataFromFirestore({ collectionName: collection, documentId: documentId });
            setData(transformData(response));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData({ collection: 'general-info', setData: setGeneralInfo, documentId }).then(() => console.log('General info fetched'));
    }, []);

    return (
        <GeneralInfoContext.Provider value={generalInfo}>
            {children}
        </GeneralInfoContext.Provider>
    );
};

export { GeneralInfoProvider, GeneralInfoContext };
