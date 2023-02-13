import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB78L_rpZ9xkVngWFJsRDaaBkQg0-DrZuc",
    authDomain: "webbase-5f6e9.firebaseapp.com",
    projectId: "webbase-5f6e9",
    storageBucket: "webbase-5f6e9.appspot.com",
    messagingSenderId: "397294144676",
    appId: "1:397294144676:web:d8bb39b170389e3a622a31",
    measurementId: "G-TQS9ZNFWV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);