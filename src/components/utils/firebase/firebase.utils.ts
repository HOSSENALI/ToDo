import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBAE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth

const db = firebaseApp.firestore();
export default db;


// ........................................

export const auth = getAuth();

// creating auth...............
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  if (!email || !password) return

  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => {
      const user = userCredentials.user;
      updateProfile(user, { displayName: displayName })
        .then(() => {
          signInAuthUserWithEmailAndPassword(email,password);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  ).catch((err)=>{
    const errorMsg = err.message
    alert(errorMsg)
  });
};

// sing-in with email and function....................
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;
  try {
    const loginResult = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("userData", JSON.stringify(loginResult));
     window.location.href = "/";
    
  } catch (err) {
    console.error(err);
    alert("Username and password does not match.");
  }
};

// sign-out..................
export const signOutUser = async () => {
  localStorage.removeItem("userData");
  window.location.href = "/login";
};
