// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBWaSHT0_L9apwzBrSgTjbgRvzCSiR_tv0",
  authDomain: "olx-react-clone-3558d.firebaseapp.com",
  projectId: "olx-react-clone-3558d",
  storageBucket: "olx-react-clone-3558d.appspot.com",
  messagingSenderId: "484636995110",
  appId: "1:484636995110:web:c08d50ae63a6c9540780e7"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

// Initialize Firebase Firestore
const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { storage, db };
