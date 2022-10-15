import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLinSZYSEkvFBquDUSag3CZvL-flCbGvQ",
  authDomain: "to-do-app-9d5c3.firebaseapp.com",
  projectId: "to-do-app-9d5c3",
  storageBucket: "to-do-app-9d5c3.appspot.com",
  messagingSenderId: "257269220588",
  appId: "1:257269220588:web:4ed553cdae2924a9ce11c9",
  measurementId: "G-DRSZ3936XW"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth

const db = firebaseApp.firestore();
export default db;


// ........................................
const googleProvider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      localStorage.setItem("userData", JSON.stringify(result));
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};
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
      console.log("user", user);
      updateProfile(user, { displayName: displayName })
        .then((s) => {
          window.location.href = "/";
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  ).catch((err)=>{
    const errorCode = err.code
    const errorMsg = err.message
    alert(errorMsg)
  });
};

// sing-in with email and function....................
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
  redirectUrl: URLSearchParams
) => {
  if (!email || !password) return;
  try {
    const loginResult = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("userData", JSON.stringify(loginResult));
    console.log(redirectUrl.get("redirectTo"));
    if (redirectUrl.get("redirectTo") === "") {
      window.location.href = "/";
    } else {
      window.location.href = String(redirectUrl.get("redirectTo"));
    }
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
