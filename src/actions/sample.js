export const LOGIN_WITH_TWITTER = 'LOGIN_WITH_TWITTER'
export const loginWithTwitter = () => async dispatch => {
    try {
        const user = await (
            signInWithProvider()
        );
        await firestore.collection("users").doc(user.uid).get().then(function(doc) {
            if (doc.exists) {
                //user　既存　二回目以降のログイン ( user, user_in_firestore)
                loginWithTwitterSuccess((user,doc.data()))
            } else {
                first_user(user)
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        // dispatch({
        //     type: LOGIN_WITH_TWITTER_SUCCESS,
        //     user: user,
        // });
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

export const FIRST_USER = 'FIRST_USER'
export const first_user = (user) => async dispatch => {
    await firestore.collection('users').doc(user.uid).set({
        uid: user.uid,
        createdAt: new Date(),
        total_action_amount: 0,
        total_score_amount: 0
    }).then(() => {
        console.log(' first user doc.data() ')
        // loginWithTwitterSuccess(user,doc.data())
        console.log('success')
    }).catch((err) => {
        console.log(err)
    })
}

export const LOGIN_WITH_TWITTER_SUCCESS = 'LOGIN_WITH_TWITTER_SUCCESS'
export const loginWithTwitterSuccess = (user,user_in_firestore) => ({
    type: LOGIN_WITH_TWITTER_SUCCESS,
    user: user,
    user_in_firestore: user_in_firestore
})