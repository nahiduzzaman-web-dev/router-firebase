
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBeLVs60mq4xoeqyhtRsarOt6RvQBFIbjc",
    authDomain: "router-firebase-8a5bb.firebaseapp.com",
    projectId: "router-firebase-8a5bb",
    storageBucket: "router-firebase-8a5bb.appspot.com",
    messagingSenderId: "971637530484",
    appId: "1:971637530484:web:dc888c47f5ef9470cf5621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;