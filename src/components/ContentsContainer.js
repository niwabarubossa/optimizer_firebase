import React, { Component } from 'react';

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

import { connect } from 'react-redux'
import { firebaseLogin, loginStatus, firebaseLogout, submitTweet } from '../actions'
// import { loginStatus } from '../actions'
// import { dispatch } from 'rxjs/internal/observable/pairs';


class ContentsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            textValue: "initial value"
        }
        // this.onSubmit = this.onSubmit.bind(this)
    }

    // async onSubmit(values){
        // const aiueo = values.target.inputText.value;
        // console.log(aiueo);
    //     // 1
    //     await this.props.submitTweet(aiueo);
    //     //今実際に仕えているアクションとの差分をログで確認して対照実験をする
    // }

    // async awaitは関係ない
    // const aiueo = 'kakikuke'変数の問題でもない
    // (event)追加しても使わなければ問題なし


    sampleSubmit(event){
        firestore.collection('tweets').add({
            content: 'sampleContent',
            created_at: new Date(),
          }).then(() => {
            console.log('aaa')
          });
    }


    render(){

        return(
            <div className="contentsContainer">
                <p><strong>{this.props.tweets}</strong></p>
                <div onClick={this.props.firebaseLogin}>アクション発動</div>
                <div onClick={this.props.loginStatus}>ログインステータスは？</div>
                <div onClick={this.props.firebaseLogout}>ログアウトする</div>
                
                <input type="text" name="inputText" />
                <button onClick={this.sampleSubmit.bind(this)}>sampleSubmit</button>



                {/* <form onSubmit={this.sampleSubmit.bind(this)}>
                    <input type="text" name="inputText" />
                    <button label="Submit" type="submit">aaa</button>
                </form> */}


                <h1>aaaaa</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin, loginStatus, firebaseLogout, submitTweet })

export default connect(mapStateToProps,mapDispatchToProps)(ContentsContainer)