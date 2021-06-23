import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDCnY7HcV4aSP0-6us4jQn9rBen937m408",
    authDomain: "contactos-firebase-60468.firebaseapp.com",
    projectId: "contactos-firebase-60468",
    storageBucket: "contactos-firebase-60468.appspot.com",
    messagingSenderId: "1038992614260",
    appId: "1:1038992614260:web:1635d9512ab653672ac221",
    measurementId: "G-61V43NQ9B9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  export {db}
