// GeneralInfoContext.js
import React, { createContext, useState, useEffect } from 'react';
import {getDataFromFirestore} from '../utils/firestoreUtils.js'; // Function to fetch data from Firestore

const GeneralInfoContext = createContext();

const GeneralInfoProvider = ({ children }) => {
    const documentId = import.meta.env.VITE_MY_FIRESTORE_GENERAL_INFO_DOCUMENT_ID;
    const [generalInfo, setGeneralInfo] = useState(null);

    const getData = async ({collection, setData, fields, documentId}) => {
        try {
            const response = await getDataFromFirestore({collectionName: collection, fields: fields, documentId: documentId});
            setData(response);
        } catch (error) {console.error('Error fetching data:', error)}
    }

    useEffect(() => {
        getData({collection: 'general-info', setData: setGeneralInfo, documentId}).then(r => console.log('General info fetched'));
    }, []);

    return (
        <GeneralInfoContext.Provider value={generalInfo}>
            {children}
        </GeneralInfoContext.Provider>
    );
};

export { GeneralInfoProvider, GeneralInfoContext };
