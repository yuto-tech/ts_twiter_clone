import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXBqfxIAoPRL1_bB4P7LG9NZKMf8NPhqk",
  authDomain: "ts-twitter-clone.firebaseapp.com",
  projectId: "ts-twitter-clone",
  storageBucket: "ts-twitter-clone.appspot.com",
  messagingSenderId: "659575359261",
  appId: "1:659575359261:web:4316ed506123cbdb55c3f4",
  measurementId: "G-5LVEES83EF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
