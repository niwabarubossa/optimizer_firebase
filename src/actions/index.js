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
export const submitTweet = (current_user,user_in_firestore,input,score) => async dispatch => {
    await firestore.collection('users').doc(current_user.uid).collection('tweets').add({
        // score: input.score,
        score: parseInt(score,10),
        body: input.body,
        author_id: current_user.uid,
        author_name: user_in_firestore.displayName,
        author_photo: user_in_firestore.photoURL,
        tweet_id: Math.floor(Math.random()*1000000),
        created_at: new Date().getTime(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
        dispatch({ type: SUBMITTWEET })
      });

      var temperature = []
        await firestore.collection('users').doc(current_user.uid).get().then(function(doc) {
            if (doc.exists) {
                temperature.push(doc.data())
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        await firestore.collection('users').doc(current_user.uid).update({ 
          total_action_amount: temperature[0].total_action_amount + 1,
          total_score_amount: temperature[0].total_score_amount + parseInt(score, 10) 
        });

    await firestore.collection('tweets').add({
        score: parseInt(score,10),
        body: input.body,
        author_id: current_user.uid,
        author_name: user_in_firestore.displayName,
        tweet_id: Math.floor(Math.random()*1000000),
        created_at: new Date().getTime(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
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
    await firestore.collection('tweets').get().then((querySnapshot) => {
    // await firestore.collection("tweets").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            temperature.push(Object.assign(doc.data(), {id: doc.id}))
        });
    });
    dispatch(getPostsSuccess(temperature))
}

export const getMyPosts = (uid) => async dispatch =>{
    const temperature = []
    await firestore.collection('users').doc(uid).collection('tweets').orderBy("created_at").get().then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
            temperature.push(Object.assign(doc.data(), {id: doc.id}))
        });
    });
    dispatch(getMyPostsSuccess(temperature))
}
export const GET_MY_POSTS_SUCCESS = 'GET_MY_POSTS_SUCCESS' 
export const getMyPostsSuccess = (json) => { 
    return {
      type: GET_MY_POSTS_SUCCESS,
      my_posts: json,
    }
  }

export const GET_WEEKLY_POSTS_SUCCESS = 'GET_WEEKLY_POSTS_SUCCESS'
export const getWeeklyPostsSuccess = (json) => {  
  return {
    type: GET_WEEKLY_POSTS_SUCCESS,
    weekly_posts: json,
  }
}
export const GET_WEEKLY_POSTS = 'GET_WEEKLY_POSTS'
// export const getWeeklyPosts = (uid) => async dispatch => {
export const getWeeklyPosts = (uid) => async dispatch => {
    const temperature = []
    var today = new Date()
    //１週間前
    var last_week_miliseconds = new Date().setDate(new Date().getDate() - 7);
    var last_week = new Date(last_week_miliseconds)
    last_week.setHours(0,0,0,0)
    await firestore.collection('users').doc(uid).collection('tweets').where('created_at', '>',last_week.getTime()).where('created_at', '<', today.getTime() ).get().then((querySnapshot) => {
    // await firestore.collection('tweets').where('created_at', '>',last_week.getTime()).where('created_at', '<', today.getTime() ).get().then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
            temperature.push(Object.assign(doc.data(), {id: doc.id}))
        });
    });
    dispatch(getWeeklyPostsSuccess(temperature))
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


export const LOGIN_WITH_TWITTER = 'LOGIN_WITH_TWITTER'
export const loginWithTwitter = () => async dispatch => {
    try {
        const user = await (
            signInWithProvider()
        );
        await firestore.collection("users").doc(user.uid).get().then(function(doc) {
            if (doc.exists) {
                //user　既存　二回目以降のログイン ( user, user_in_firestore)
                console.log('二回目以降のログインです user データがfirestore　に存在しています')
                dispatch(set_current_user_and_in_firestore(user))
                // dispatch(loginWithTwitterSuccess((user,doc.data())))
            } else {
                console.log('初回のログインです user データがfirestore　に存在していませんので作成します')
                dispatch(first_user(user))
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        return user;
    } catch(error) {
        console.log(error);
    }
}
export const first_user = (user) => async dispatch => {
    console.log('初回ログインですので、userデータを作成します')
    await firestore.collection('users').doc(user.uid).set({
        uid: user.uid,
        createdAt: new Date(),
        total_action_amount: 0,
        total_score_amount: 0,
        photoURL: user.photoURL,
        displayName: user.displayName
    }).then(() => {
        console.log(' first users　データ作成完了しました ')
        dispatch(set_current_user_and_in_firestore(user))
        console.log('success')
    }).catch((err) => {
        console.log(err)
    })
}
export const SET_CURRENT_USER_AND_IN_FIRESTORE = 'SET_CURRENT_USER_AND_IN_FIRESTORE' 
export const set_current_user_and_in_firestore = (current_user) => async dispatch => {
    const user_in_firestore = []
    await firestore.collection("users").doc(current_user.uid).get().then(function(doc) {
        if (doc.exists) {
            user_in_firestore.push(doc.data())
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    dispatch({
        type: SET_CURRENT_USER_AND_IN_FIRESTORE,
        user_in_firestore: user_in_firestore[0],
        current_user: current_user
    })
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
export const LOGIN_WITH_TWITTER_SUCCESS = 'LOGIN_WITH_TWITTER_SUCCESS'
export const loginWithTwitterSuccess = (current_user,user_in_firestore) => ({
    type: LOGIN_WITH_TWITTER_SUCCESS,
    current_user: current_user,
    user_in_firestore: user_in_firestore
})

export const LOGIN_WITHGOOGLE = 'LOGIN_WITHGOOGLE'
export const loginWithGoogle = () => async dispatch => {
    try {
        const user = await (
            signInWithGoogleProvider()
        );
        firestore.collection('users').doc(user.uid).set({
            uid: user.uid,
            createdAt: new Date(),
            // total_action_amount: 0,
            // total_score_amount: 0
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
async function signInWithGoogleProvider() {    
    try {
        var provider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth().signInWithPopup(provider).then(function(result) {
        //     var token = result.credential.accessToken;
        //     var user = result.user;
        //   }).catch(function(error) {
        //   });
        const response = await firebase.auth().signInWithPopup(provider);
        return response.user;
    } catch(error) {
      throw error;
    }
}
export const GET_CURRENT_STATE = 'GET_CURRENT_STATE'
export const getCurrentState = () => {
    return {
        type: GET_CURRENT_STATE,
    }
}
export const GET_USER_INFORMATION = 'GET_USER_INFORMATION'
export const getUserInformation = () => async dispatch => {
    await firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(getUserChartInformation(user))
        } else {
            console.log('get user information error')
        }
    });
};
export const GET_USER_CHART_INFORMATION = 'GET_USER_CHART_INFORMATION'
export const getUserChartInformation = ( user ) => async dispatch => {
    await firestore.collection("users").doc(user.uid).get().then(function(doc) {
        if (doc.exists) {
            dispatch(getUserInformationSuccess(user,doc.data()))
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

export const GET_USER_INFORMATION_SUCCESS = 'GET_USER_INFORMATION_SUCCESS'
export const getUserInformationSuccess = (current_user,user_in_firestore) => {
    return {
        type: GET_USER_INFORMATION_SUCCESS,
        current_user: current_user,
        user_in_firestore: user_in_firestore
    }
}

export const GET_USER_CHART_INFORMATION_SUCCESS = 'GET_USER_CHART_INFORMATION_SUCCESS'
export const getUserChartInformationSuccess = (current_user) => {  
    return {
        type: GET_USER_CHART_INFORMATION_SUCCESS,
        chart_user: current_user
    }
}

export const GET_DISPLAY_USER_INFORMATION = 'GET_DISPLAY_USER_INFORMATION'
export const getDisplayUserInformation = (uid) => async dispatch => {
    await firestore.collection("users").where("uid","==",uid).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log('action index in get display user information')
            console.log(doc.data())
            dispatch(getDisplayUserInformationSuccess(doc.data()))
        });
    });
};
export const GET_DISPLAY_USER_INFORMATION_SUCCESS = 'GET_DISPLAY_USER_INFORMATION_SUCCESS'
export const getDisplayUserInformationSuccess = (display_user) => {  
    return {
        type: GET_DISPLAY_USER_INFORMATION_SUCCESS,
        display_user: display_user
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


export const FOLLOW_BUTTON_CLICKED = 'FOLLOW_BUTTON_CLICKED'
export const followButtonClicked = ( current_user, followed_user ) => async dispatch => {
    await firestore.collection('users').doc(followed_user.uid).collection('followers').doc(current_user.uid).get().then(function(doc) {
        if (doc.exists) {
            dispatch(removeUserFromFollow( current_user, followed_user ))
        } else {
            dispatch(addUserToFollow( current_user, followed_user ))
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

export const addUserToFollow = ( current_user, followed_user ) => async dispatch => {
    await firestore.collection('users').doc(followed_user.uid).collection('followers').doc(current_user.uid).set({
        follower_id: current_user.uid
      }).then(() => {
        console.log('add user to followers success')
    });
    await firestore.collection('users').doc(current_user.uid).collection('follow').doc(followed_user.uid).set({
        follow_id: followed_user.uid
      }).then(() => {
        console.log('add user to follower success')
    });
}

export const REMOVE_USER_FROM_FOLLOW = 'REMOVE_USER_FROM_FOLLOW'
export const removeUserFromFollow = ( current_user, followed_user ) => async dispatch => {
    await firestore.collection("users").doc(followed_user.uid).collection('followers').doc(current_user.uid).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    await firestore.collection("users").doc(current_user.uid).collection('follow').doc(followed_user.uid).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

export const ACTION_A = 'ACTION_A'
export const action_A = () => async dispatch =>  {
    console.log('action A in actions/index.js')
    // action_B() ->これ単体だとaction_b のconsole.logが動くだけで、reducer　にaction_B　動いてない
    // dispatch(action_B()) async dispatch の中でやるとこれがきちんと動作する
    // async dispatch がある場合　return だけだと何も発生しない reducerも動いてない。 async dispatch がない場合は単体でも十分動く
    return {
        type: ACTION_A,
    }
}
export const ACTION_B = 'ACTION_B'
export const action_B = () =>  {
    console.log('表示されない')
    return {
        type: ACTION_B,
    }
}