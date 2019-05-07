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
  
exports.tweetsCollectionWriteDetect = functions.firestore.document('tweets/{tweetsId}/liker/{likerId}').onWrite((change, context) => {
    console.log('function called')
    console.log('before data')
    console.log(change.before.data())
    console.log('after data')
    console.log(change.after.data())
    console.log(context)
    console.log(context.params.tweetsId)
    return null
});

exports.tweetDetect = functions.firestore
    .document('tweets/{tweetId}').onWrite((change, context) => {
        console.log(change.after);
        console.log(change.after.data());
        // {   author_id: '8MVpxIc84dfuqgNLAsjATCREcWS2',
        //     body: 'bod',
        //     created_at: Timestamp { _seconds: 1557200181, _nanoseconds: 94000000 },
        //     title: 'title',
        //     tweet_id: 643000 }
        return null
    });