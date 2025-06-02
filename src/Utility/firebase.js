import firebase  from "firebase/compat/app";

import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZljXCOerW4AfPPS4nEAH0YtojmGFCSz4",
  authDomain: "e-clone-2025-8cefd.firebaseapp.com",
  projectId: "e-clone-2025-8cefd",
  storageBucket: "e-clone-2025-8cefd.firebasestorage.app",
  messagingSenderId: "715170192962",
  appId: "1:715170192962:web:7c8898d3bd046f9ba897db",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()