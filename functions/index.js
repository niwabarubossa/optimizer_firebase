// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onCall((data, context) => {
    console.log(data)
    console.log(context)
});

exports.addMessage = functions.https.onCall((data, context) => {
    console.log(data)	
    const follower_id = data.follower_id
    // addMessage({text: 'aaaaaa'}
    // { text: 'aaaaaa' }
    return follower_id.forEach(function (value, index, array) {
        console.log(value); //
        const followersRef = admin.firestore().collection('users').doc(value).collection('inbox') 
        followersRef.add({
            name: 'San Francisco', state: 'CA', country: 'USA',
            capital: false, population: 860000 })  
        });
});

  
// exports.tweetsCollectionWriteDetect = functions.firestore.document('tweets/{tweetsId}/liker/{likerId}').onWrite((change, context) => {
    exports.tweetsCollectionWriteDetect = functions.firestore.document('users/{userId}/timeline/{tweetId}').onWrite((change, context) => {
    const followersRef = admin.firestore().collection('users').doc(context.params.userId).collection('followers')
    return followersRef.get().then(doc => {
        if (!doc.exists) {
            console.log('document does not exist')
        } else {
          console.log(doc.data())
        }
        })
        .catch(err => {
            console.log(err)
        })
});

// exports.tweetDetect = functions.firestore
        // .document('users/{userId}/timeline/{tweetId}')
//         .onWrite(async (context) => {
//                 console.log(context.params.userId)
//                 const followersRef = admin.firestore().collection('users').doc(context.params.userId).collection('followers')
//                 const user = await followersRef.get();
//                 console.log('followers')
//                 console.log(user)
//                 return null
//             })

            // exports.tweetDetect = functions.firestore
            // .document("users/{userId}/timeline/{tweetId}")
            // .onWrite(async context => {
            //     console.log(context.params.userId)
            //     const followersRef = admin.firestore().collection('users').doc(context.params.userId).collection('followers')
            //     const user = await followersRef.get();
            //     console.log('followers')
            //     console.log(user)
            //     return null
            // })

    exports.sampleTweet = functions.https.onRequest((request, response) => {
        var citiesRef = admin.firestore().collection('users');
        citiesRef.doc('SF').set({
          name: 'San Francisco', state: 'CA', country: 'USA',
          capital: false, population: 860000 })
      
        var cityRef = admin.firestore().collection('users').doc('SF')
        cityRef.get()
        .then(doc => {
          if (!doc.exists) {
            response.send('No such document!')
          } else {
            response.send(doc.data())
            }
          })
          .catch(err => {
            response.send('not found')
          })
    })
      