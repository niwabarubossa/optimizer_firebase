import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';
var storage = firebase.storage();
var storageRef = storage.ref();

export const READTWEETS = 'READTWEETS'
export const readTweets = () => ({
    type: READTWEETS
})
export const FIREBASELOGIN = 'FIREBASELOGIN'
export const firebaseLogin = () => ({
    type: FIREBASELOGIN
})
export const LOGINSTATUS = 'LOGINSTATUS'
export const loginStatus = aiueo => async dispatch => {
    dispatch({ type: LOGINSTATUS, aiueo })
}
export const FIREBASELOGOUT = 'FIREBASELOGOUT'
export const firebaseLogout = () => ({
    type: FIREBASELOGOUT
})
export const SUBMITTWEET = 'SUBMITTEXT'
export const submitTweet = (current_user,input) => async dispatch => {
    firestore.collection('tweets').add({
        title: input.title,
        body: input.body,
        author_id: current_user.uid,
        tweet_id: Math.floor(Math.random()*1000000),
        created_at: new Date(),
      }).then(() => {
        dispatch({ type: SUBMITTWEET })
      });
}
export const GET_TWEETS = 'GET_TWEETS'
export const getTweets = () => ({
    type: GET_TWEETS
})
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const getPostsSuccess = (json) => {  
  return {
    type: GET_POSTS_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}
export const getPosts = () => async dispatch => {
    const temperature = []
    // await firestore.collection("projects").get().then(function(querySnapshot) {
    await firestore.collection("tweets").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            temperature.push(Object.assign(doc.data(), {id: doc.id}))
        });
    });
    dispatch(getPostsSuccess(temperature))
}
export const getSelectedPosts = (tweet_id) => async dispatch => {
    const temperature = []
    await firestore.collection("tweets").where("tweet_id","==",tweet_id).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            temperature.push(doc.data())
        });
    });
    dispatch(getPostsSuccess(temperature))
}
export const HANDLE_DRAWER_TOGGLE = 'HANDLE_DRAWER_TOGGLE'
export const handleDrawerToggle = () => ({
    type: HANDLE_DRAWER_TOGGLE
})
export const HANDLE_DRAWER_TOGGLE_RESET = 'HANDLE_DRAWER_TOGGLE_reset'
export const handleDrawerToggleReset = () => ({
    type: HANDLE_DRAWER_TOGGLE_RESET
})

export const LOGIN_WITH_TWITTER_SUCCESS = 'LOGIN_WITH_TWITTER_SUCCESS'
export const loginWithTwitterSuccess = (user) => ({
    type: LOGIN_WITH_TWITTER_SUCCESS,
    user: user
})

export const LOGIN_WITH_TWITTER = 'LOGIN_WITH_TWITTER'
export const loginWithTwitter = () => async dispatch => {
    try {
        const user = await (
            signInWithProvider()
        );
        firestore.collection('users').doc(user.uid).set({
            uid: user.uid,
            createdAt: new Date()
        }).then(() => {
            console.log('success')
        }).catch((err) => {
            console.log(err)
        })
        dispatch({
            type: LOGIN_WITH_TWITTER_SUCCESS,
            user: user
        });
        return user;
    } catch(error) {
        console.log(error);
    }
}

async function signInWithProvider() {    
    try {
        var provider = new firebase.auth.TwitterAuthProvider();
        const response = await firebase.auth().signInWithPopup(provider);
        return response.user;
    } catch(error) {
      throw error;
    }
}

export const GET_CURRENT_STATE = 'GET_CURRENT_STATE'
export const getCurrentState = () => {

    var addMessage = firebase.functions().httpsCallable('addMessage');
        addMessage({text: 'aaaaaa'}).then(function(result) {
            console.log('function result')
            console.log(result)
         });
    return {
        type: GET_CURRENT_STATE,
    }
}
export const GET_USER_INFORMATION = 'GET_USER_INFORMATION'
export const getUserInformation = () => async dispatch => {
    await firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(getUserInformationSuccess(user))
        } else {
            console.log('get user information error')
        }
    });
};
export const GET_USER_INFORMATION_SUCCESS = 'GET_USER_INFORMATION_SUCCESS'
export const getUserInformationSuccess = (current_user) => {  
    return {
        type: GET_USER_INFORMATION_SUCCESS,
        current_user: current_user
    }
}

export const GET_DISPLAY_USER_INFORMATION = 'GET_DISPLAY_USER_INFORMATION'
export const getDisplayUserInformation = (uid) => async dispatch => {
    await firestore.collection("users").where("uid","==",uid).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.data())
            dispatch(getDisplayUserInformationSuccess(doc.data().uid))
        });
    });
};
export const GET_DISPLAY_USER_INFORMATION_SUCCESS = 'GET_DISPLAY_USER_INFORMATION_SUCCESS'
export const getDisplayUserInformationSuccess = (display_user_uid) => {  
    return {
        type: GET_DISPLAY_USER_INFORMATION_SUCCESS,
        display_user_uid: display_user_uid
    }
}

export const SUBMIT_TEST_IMAGE = 'SUBMIT_TEST_IMAGE'
export const submitTestImage = ( file, file_name, values ) => async dispatch =>{

    await storageRef.child(file_name).put(file).then(function(snapshot) {
        console.log(snapshot)
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
            dispatch(submitImageTweet( values, downloadURL))
        });
        console.log('Uploaded a blob or file!');
    })
}
export const SUBMIT_IMAGE_TWEET = 'SUBMIT_IMAGE_TWEET'
export const submitImageTweet = (input, downloadURL) => async dispatch => {
    await firestore.collection('tweets').add({
        title: input.title,
        body: input.body,
        image_url: downloadURL,
        tweet_id: Math.floor(Math.random()*1000000),
        created_at: new Date(),
      }).then(() => {
      });
}

export const GOOD_BUTTON_CLICKED = 'GOOD_BUTTON_CLICKED'
export const goodButtonClicked = ( current_user, tweet_id ) => async dispatch => {
    await firestore.collection('tweets').doc(tweet_id).collection('liker').doc(current_user.uid).get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            dispatch(removeUserFromLiker( current_user, tweet_id))
        } else {
            dispatch(addUserToLiker( current_user, tweet_id))
            console.log('add user success')
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

export const addUserToLiker = ( current_user, tweet_id ) => async dispatch => {
    await firestore.collection('tweets').doc(tweet_id).collection('liker').doc(current_user.uid).set({
        liker_id: current_user.uid
        //parent_tweet_id: tweet_id これによりcloud functions で親のlikecount　を更新できるように
      }).then(() => {
    });
}

export const REMOVE_USER_FROM_LIKER = 'REMOVE_USER_FROM_LIKER'
export const removeUserFromLiker = ( current_user, tweet_id ) => async dispatch => {
    await firestore.collection("tweets").doc(tweet_id).collection('liker').doc(current_user.uid).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    
}
