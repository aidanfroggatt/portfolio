import { getDoc, getDocs, collection, doc } from "firebase/firestore";
import { firestore } from "../config/firebase.config.js";
import PropTypes from "prop-types";

export const getDataFromFirestore = async ({collectionName, documentId, fields = []}) => {
    // Initialize an object to store the JSON data
    const data = {};

    if (documentId) {
        // If documentId is provided, fetch only that specific document
        const docRef = doc(firestore, collectionName, documentId);
        const docSnapshot = await getDoc(docRef);

        // Check if the document exists
        if (docSnapshot.exists()) {
            // Include only the specified fields or all fields if no fields are provided
            if (fields.length === 0) {
                data[documentId] = docSnapshot.data();
            } else {
                const filteredData = {};
                fields.forEach(field => {
                    if (docSnapshot.data().hasOwnProperty(field)) {
                        filteredData[field] = docSnapshot.data()[field];
                    }
                });
                data[documentId] = filteredData;
            }
        } else {
            throw new Error("Document does not exist");
        }
    } else {
        // If documentId is not provided, fetch all documents in the collection
        const querySnapshot = await getDocs(collection(firestore, collectionName));

        // Loop through each document in the snapshot
        querySnapshot.forEach(doc => {
            const docId = doc.id;
            if (fields.length === 0) {
                data[docId] = doc.data();
            } else {
                const filteredData = {};
                fields.forEach(field => {
                    if (doc.data().hasOwnProperty(field)) {
                        filteredData[field] = doc.data()[field];
                    }
                });
                data[docId] = filteredData;
            }
        });
    }

    // Return the object containing the data
    return data;
};

getDataFromFirestore().propTypes = {
    collectionName: PropTypes.string.isRequired,
    documentId: PropTypes.string,
    fields: PropTypes.array
};
