import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCruUL1r-mr3ho2KHjpblKd9V4jdWLfdGU",
  authDomain: "clone-50a6d.firebaseapp.com",
  databaseURL: "https://clone-50a6d.firebaseio.com",
  projectId: "clone-50a6d",
  storageBucket: "clone-50a6d.appspot.com",
  messagingSenderId: "35694463457",
  appId: "1:35694463457:web:43e03fbce81add2332eaa0",
  measurementId: "G-2QBLYRW3GD",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
