import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1m27xeaK_rstDSl_W5sJDBsAmrWBl2Z4",
  authDomain: "ehliyetse-ff75e.firebaseapp.com",
  projectId: "ehliyetse-ff75e",
  storageBucket: "ehliyetse-ff75e.appspot.com",
  messagingSenderId: "934621872810",
  appId: "1:934621872810:web:63c8204894663d69b286d3",
  measurementId: "G-7KYCQ5LFEL"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}