import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKJwj0AOxlWhpNMKcssq3d99HrYF7hwHs",
  authDomain: "avmc-rf.firebaseapp.com",
  projectId: "avmc-rf",
  storageBucket: "avmc-rf.firebasestorage.app",
  messagingSenderId: "516564420708",
  appId: "1:516564420708:web:1e05cc606f690f5d4bf771",
  measurementId: "G-HHWRWYRZFP"
};

// Initialize Firebase (prevent duplicate initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
export const db = getFirestore(app);
export default app;
