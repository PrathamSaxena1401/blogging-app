import firebase from "firebase";
require("firebase/firestore");

var firebaseConfig = {
   apiKey: "AIzaSyCxk98ZjuL23GYebnfZeApkSLSWQvrmTlI",
   authDomain: "react-blogging-flow.firebaseapp.com",
   databaseURL: "https://react-blogging-flow.firebaseio.com",
   projectId: "react-blogging-flow",
   storageBucket: "react-blogging-flow.appspot.com",
   messagingSenderId: "275786810773",
   appId: "1:275786810773:web:8dc4671d9478be04cc629c",
   measurementId: "G-3VWXSJ30C7"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore()
export const auth =firebase.auth()
export const firestore =firebase.firestore
export default db;
