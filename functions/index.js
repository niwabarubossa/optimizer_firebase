const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onCall((data, context) => {
    console.log(data)
    console.log(context)
});

exports.addMessage = functions.https.onCall((data, context) => {
    console.log(data)	
    const follower_id = data.follower_id
    return follower_id.forEach(function (value, index, array) {
        console.log(value); //
        const followersRef = admin.firestore().collection('users').doc(value).collection('inbox') 
        followersRef.add({
            name: 'San Francisco', state: 'CA', country: 'USA',
            capital: false, population: 860000 })  
        });
});

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