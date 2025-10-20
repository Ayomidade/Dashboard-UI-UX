// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT_II3LZoUz-lbzGaQulGkJzEX87arwfo",
  authDomain: "share-homes.firebaseapp.com",
  projectId: "share-homes",
  storageBucket: "share-homes.firebasestorage.app",
  messagingSenderId: "911978471199",
  appId: "1:911978471199:web:c7502f14f3374bea34da2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);
export const usersRef = collection(db, "users");
export const propertiesRef = collection(db, "properties");
