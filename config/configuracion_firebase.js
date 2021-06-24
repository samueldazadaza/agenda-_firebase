import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBfWg1d_f4j_tifVI93uoPo_r3ilPPqdcY",
  authDomain: "contact-1b590.firebaseapp.com",
  projectId: "contact-1b590",
  storageBucket: "contact-1b590.appspot.com",
  messagingSenderId: "161790296440",
  appId: "1:161790296440:web:c535963a449f6aaef4c88d",
  measurementId: "G-NKJV73NDB4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  export {db}
