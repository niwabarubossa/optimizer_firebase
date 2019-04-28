import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBPhbtLJmPTit-B3JLrSTuc1Va_o6y88AI",
    authDomain: "optimizer-60ecc.firebaseapp.com",
    databaseURL: "https://optimizer-60ecc.firebaseio.com",
    projectId: "optimizer-60ecc",
    storageBucket: "optimizer-60ecc.appspot.com",
    messagingSenderId: "398819056008"
  };
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();