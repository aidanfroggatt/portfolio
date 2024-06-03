import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../config/firebase.config.js";

// Description: This file contains Firebase Storage utility functions.

/**
 * @author Aidan Froggatt
 * @description Fetches the download URL of a file from Firebase Storage.
 * @param path - The path to the file in Firebase Storage.
 * @returns {Promise<string>} - The download URL of the file.
 */
export const getDownloadURLFromStorage = async (path) => {
    const storageRef = ref(storage, path);
    try {
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error('Error fetching download URL:', error);
        return '';
    }
}