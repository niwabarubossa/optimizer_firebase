import firebase from 'firebase';

var config = {
  };
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
