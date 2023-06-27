import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyCVM122mlWR_P08_Ny81qiee1Y0M3Lx9i8",
  authDomain: "react-firebase-auth-ed914.firebaseapp.com",
  databaseURL:
    "https://react-firebase-auth-ed914-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-firebase-auth-ed914",
  storageBucket: "react-firebase-auth-ed914.appspot.com",
  messagingSenderId: "972267272479",
  appId: "1:972267272479:web:a41654e6aecbff24f7982a",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
