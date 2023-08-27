// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC-Oghcq2IHHPOVE7tAq9jE67IQA1Bhvr8",
  authDomain: "gleescrawl.firebaseapp.com",
  projectId: "gleescrawl",
  storageBucket: "gleescrawl.appspot.com",
  messagingSenderId: "394138926019",
  appId: "1:394138926019:web:0be9862b977701167d5b76"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD-NWQJf-dOgLn7iK4mPjVlmI4bF5SC2P4",
//   authDomain: "gleescrawl-2269e.firebaseapp.com",
//   projectId: "gleescrawl-2269e",
//   storageBucket: "gleescrawl-2269e.appspot.com",
//   messagingSenderId: "811976990547",
//   appId: "1:811976990547:web:b386253832a6683e1a4ba6"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase-related variables
export const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence) // Use SESSION or LOCAL instead of inMemoryPersistence
  .then(() => {
    console.log('Authentication persistence set successfully.');
  })
  .catch((error) => {
    console.error('Error setting authentication persistence:', error);
  });

export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
