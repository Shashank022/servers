import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyC6DnrPDni1AlAIcN8hGlkCFUjNMJwjiBQ",
    authDomain: "serversdata-916e9.firebaseapp.com",
    databaseURL: "https://serversdata-916e9.firebaseio.com",
    projectId: "serversdata-916e9",
    storageBucket: "serversdata-916e9.appspot.com",
    messagingSenderId: "576454670520",
    appId: "1:576454670520:web:1c19b26e949d6897e95c4d",
    measurementId: "G-227ZKDK6JT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore.settings({ timestampInSnapshots:true });

  export default firebase;