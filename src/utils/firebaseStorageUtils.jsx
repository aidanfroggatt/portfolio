import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../config/firebase.config.js";
import {useState} from "react";

const storageRef = ref(storage, "gs://portfolio-aidan-froggatt.appspot.com/projects/snapcycle/snapcycle_award.png");
const [videoURL, setVideoURL] = useState('');
getDownloadURL(storageRef).then((url) => {
    setVideoURL(url)
    console.log('Video URL:', videoURL)
}).catch((error) => {
    console.error('Error fetching image:', error);
});