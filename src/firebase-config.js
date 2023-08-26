// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-NWQJf-dOgLn7iK4mPjVlmI4bF5SC2P4",
  authDomain: "gleescrawl-2269e.firebaseapp.com",
  projectId: "gleescrawl-2269e",
  storageBucket: "gleescrawl-2269e.appspot.com",
  messagingSenderId: "811976990547",
  appId: "1:811976990547:web:b386253832a6683e1a4ba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase-related variables
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
