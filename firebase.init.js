// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY29aNxur-uKFex1zKD6zcx8tQ5rTtLb8",
    authDomain: "whatsapp-clone-a3c57.firebaseapp.com",
    projectId: "whatsapp-clone-a3c57",
    storageBucket: "whatsapp-clone-a3c57.appspot.com",
    messagingSenderId: "860597110457",
    appId: "1:860597110457:web:1e2db3375ac159dd0dfd68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// create auth
const auth = getAuth(app)
//create store 
const db = getFirestore(app)
//export
export { db, auth }
