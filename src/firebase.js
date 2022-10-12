// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCLinSZYSEkvFBquDUSag3CZvL-flCbGvQ",
//   authDomain: "to-do-app-9d5c3.firebaseapp.com",
//   projectId: "to-do-app-9d5c3",
//   storageBucket: "to-do-app-9d5c3.appspot.com",
//   messagingSenderId: "257269220588",
//   appId: "1:257269220588:web:4ed553cdae2924a9ce11c9",
//   measurementId: "G-DRSZ3936XW",
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyCLinSZYSEkvFBquDUSag3CZvL-flCbGvQ",
//   authDomain: "to-do-app-9d5c3.firebaseapp.com",
//   projectId: "to-do-app-9d5c3",
//   storageBucket: "to-do-app-9d5c3.appspot.com",
//   messagingSenderId: "257269220588",
//   appId: "1:257269220588:web:4ed553cdae2924a9ce11c9",
//   measurementId: "G-DRSZ3936XW",
// };
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLinSZYSEkvFBquDUSag3CZvL-flCbGvQ",
  authDomain: "to-do-app-9d5c3.firebaseapp.com",
  projectId: "to-do-app-9d5c3",
  storageBucket: "to-do-app-9d5c3.appspot.com",
  messagingSenderId: "257269220588",
  appId: "1:257269220588:web:4ed553cdae2924a9ce11c9",
  measurementId: "G-DRSZ3936XW",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth

const db = firebaseApp.firestore();
export default db;
