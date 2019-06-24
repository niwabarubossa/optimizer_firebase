import React, { Component } from 'react';
import { handleDrawerToggle, firebaseLogin,firebaseLogout, loginStatus, loginWithTwitter,loginWithGoogle, getCurrentState, getUserInformation, getUserInformationSuccess,submitTweet, submitTestImage, set_current_user_and_in_firestore } from '../../actions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import css from '../../assets/loginPage/MainContainer.css'
import firebase from 'firebase'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { runInThisContext } from 'vm';

class MainContainer extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderAddressField(field){
        const { input, label, type, meta: {touched, error} } = field   
        return (
            <div>
                <label>メールアドレス</label>
                {/* <textarea type="number" placeholder="スコアを入力してください.." {...input} className={css.inputScore} cols="50" rows="1"></textarea> */}
                <input {...input} placeholder="メールアドレス" type="text" name="number" className={css.inputScore} ></input>
            </div>
        )
    }

    renderPasswordField(field){
        const { input, label, type, meta: {touched, error} } = field   
        return (
            <div>
                <label>パスワード</label>
                <textarea placeholder="パスワード" {...input} className={css.inputContent} cols="50" rows="1"></textarea>
            </div>
        )
    }

    async onSubmit(values){
        await this.props.submitTweet(this.props.current_user,this.props.user_in_firestore,values)
    }

    loginWithGoogleDirect(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var user = result.user;
            console.log(user)
          }).catch(function(error) {
              console.log('error occured')
              console.log(error)
          });
    }

    render(){

        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 5 }

        return(
            <div>
                <div className={css.loginFormContainer}>
                    {/* <form onSubmit={handleSubmit(this.onSubmit)} className={css.form}>
                        <div><Field label="Email" name="email" type="text" component={this.renderAddressField} /></div>
                        <div><Field label="password" name="password" type="password" component={this.renderPasswordField} /></div>
                        <RaisedButton label="Submit" type="submit" style={style} />
                    </form> */}
                        {
                            this.props.current_user  ?
                            <React.Fragment>
                                <h3>すでにログインしています</h3>
                                <Button variant="outlined" color="primary" onClick={this.props.firebaseLogout}>
                                    ログアウト
                                </Button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Button variant="outlined" color="primary" onClick={this.props.getUserInformation}>
                                    ログインしてる？
                                </Button>
                                <Button variant="outlined" color="primary" onClick={this.props.loginWithTwitter}>
                                    Twitterでログイン
                                </Button>
                                <Button variant="outlined" color="primary" onClick={this.loginWithGoogleDirect.bind(this)}>
                                    Googleでログイン
                                </Button>
                            </React.Fragment>
                        }
                </div>
            </div>
        )
    }
}

const validate = values => {
    const errors = {}
    if (!values.title) errors.title = "タイトルが空です"
    if (!values.body) errors.body = "内容が空です"
    return errors
}

const mapDispatchToProps = ({ handleDrawerToggle,
                            firebaseLogin,
                            loginStatus, 
                            firebaseLogout,
                            loginWithTwitter, 
                            loginWithGoogle,
                            getCurrentState, 
                            getUserInformation, 
                            getUserInformationSuccess,
                            submitTweet,
                            submitTestImage,
                            set_current_user_and_in_firestore
                         })
const mapStateToProps = (state) => {    
  return { 
    current_user: state.firebase.current_user,
    user_in_firestore: state.firebase.user_in_firestore
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'contentsContainerForm' })(MainContainer)
)