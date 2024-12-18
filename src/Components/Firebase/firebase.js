// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_32_R8Bpb0y1HaTbIQrtkA8SiSafv1AM",
  authDomain: "coffee-store-53b05.firebaseapp.com",
  projectId: "coffee-store-53b05",
  storageBucket: "coffee-store-53b05.firebasestorage.app",
  messagingSenderId: "640826493233",
  appId: "1:640826493233:web:152545990abf12b65a0810"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);