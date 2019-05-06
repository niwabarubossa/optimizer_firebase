// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.addMessage = functions.https.onCall((data, context) => {
    console.log(data)	
    // { text: 'aaaaaa' }
    console.log(context)
    // addMessage({text: 'aaaaaa'}
    const aiueo = 'aiueo'
    return aiueo
    //{ data: 'aiueo' }
});
  