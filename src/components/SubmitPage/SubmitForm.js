import React, { Component } from 'react';
import 'firebase/firestore';
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { submitTweet,submitTestImage } from '../../actions'
import Button from '@material-ui/core/Button';
import css from '../../assets/submitPage/SubmitForm.css'
// import FileInput from '../FileInput'
// import FieldFileInput from './FieldFileInput'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';



class ContentsContainer extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderScoreField(field){
        const { input, label, type, meta: {touched, error} } = field   
        return (
            <React.Fragment>
                <label>スコア</label>
                <input {...input} placeholder="スコアを入力してください.." type="number" name="number" className={css.inputScore} ></input>
            </React.Fragment>
        )
    }

    renderContentField(field){
        const { input, label, type, meta: {touched, error} } = field   
        return (
            <React.Fragment>
                <label>改善内容</label>
                <textarea placeholder="改善内容を入力してください..." {...input} className={css.inputContent} cols="50" rows="2"></textarea>
            </React.Fragment>
        )
    }

    async onSubmit(values){
        // var blob = new Blob([values.image], { type: "image/jpg" });
        // var file_name = values.image.name
        await this.props.submitTweet(this.props.current_user,this.props.user_in_firestore,values)
        this.props.history.push('/')
        // await this.props.submitTweet(this.props.current_user,values)
        // await this.props.submitTestImage(blob,file_name, values)
    }

    render(){

        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 5 }
        return(
                    <div className={css.formContainer}>
                        <form onSubmit={handleSubmit(this.onSubmit)} className={css.form}>
                            <div><Field label="Score" name="score" type="number" component={this.renderScoreField} /></div>
                            <div><Field label="Body" name="body" type="text" component={this.renderContentField} /></div>
                            {/* <div><Field label="Body" name="image" type="file" component={FieldFileInput} /></div> */}
                            <RaisedButton label="Submit" type="submit" style={style} />
                        </form>
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
const mapStateToProps = (state) => {    
    return { 
        current_user: state.firebase.current_user,
        user_in_firestore: state.firebase.user_in_firestore
    }
  }
const mapDispatchToProps = ({ submitTweet, submitTestImage })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'contentsContainerForm' })(ContentsContainer)
))