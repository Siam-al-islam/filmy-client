// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYTiww7fsuAS46gk3SubW03FZAIHXfVr0",
    authDomain: "filmy-52ff7.firebaseapp.com",
    projectId: "filmy-52ff7",
    storageBucket: "filmy-52ff7.appspot.com",
    messagingSenderId: "695338047169",
    appId: "1:695338047169:web:57233bdeb042f383872640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;