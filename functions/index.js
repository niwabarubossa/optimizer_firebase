// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
export const admin = require('firebase-admin');
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


// exports.followAddActionCountUpdate = functions.firestore.document('users/{userId}/follow/{followUserId}').onCreate((change, context) => {
//     const followedRef = admin.firestore().collection('users').doc(context.params.userId)
//     //フォローボタンを押した人の参照
//     const followerRef = admin.firestore().collection('users').doc(context.params.followUserId)
//     //フォローボタンを押された人の参照
//     return followedRef.runTransaction(async (t) => {

//         const follower = await t.get(followerRef);
//         //フォロー押した人の
//         const followed = await t.get(followedRef);
//         //フォローボタンを押された人の参照
   
//         const followerUpdate = {
//           followingCount: (follower.data().followingCount || 0) + 1
//         };
//         const followedUpdate = {
//           followerCount: (followed.data().followerCount || 0) + 1
//         };
   
//         await t.set(followerRef, followerUpdate, { merge: true });
//         await t.set(followedRef, followedUpdate, { merge: true });
   
//         return t;
//       });

// });

// exports.followDeleteActionCountUpdate = functions.firestore.document('users/{userId}/follow/{followUserId}').onDelete((change, context) => {
//     const followedRef = admin.firestore().collection('users').doc(context.params.userId)
//     //フォローボタンを押した人の参照
//     const followerRef = admin.firestore().collection('users').doc(context.params.followUserId)
//     //フォローボタンを押された人の参照
//     return followedRef.runTransaction(async (t) => {

//         const follower = await t.get(followerRef);
//         //フォロー押した人の
//         const followed = await t.get(followedRef);
//         //フォローボタンを押された人の参照
   
//         const followerUpdate = {
//           followingCount: (follower.data().followingCount || 0) - 1
//         };
//         const followedUpdate = {
//           followerCount: (followed.data().followerCount || 0) - 1
//         };
   
//         await t.set(followerRef, followerUpdate, { merge: true });
//         await t.set(followedRef, followedUpdate, { merge: true });
   
//         return t;
//       });

// });
