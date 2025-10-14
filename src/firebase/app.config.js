import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtXV5oIYbl0kGJ8LDcOzbufTBkzx2eNRs",
  authDomain: "sharehomes-b9a1b.firebaseapp.com",
  projectId: "sharehomes-b9a1b",
  storageBucket: "sharehomes-b9a1b.firebasestorage.app",
  messagingSenderId: "697749930997",
  appId: "1:697749930997:web:bd4bff3a115797d1f596bc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
