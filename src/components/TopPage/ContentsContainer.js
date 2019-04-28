import React, { Component } from 'react';
import 'firebase/firestore';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { submitTweet,submitTestImage } from '../../actions'
import Button from '@material-ui/core/Button';
import css from '../../assets/ContentsContainer.css'
import FileInput from '../FileInput'

class ContentsContainer extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.firebase_submit = this.firebase_submit.bind(this)
    }
    renderField(field){
        const { input, label, type, meta: {touched, error} } = field   
        return (
            <TextField 
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={touched && error}
                {...input}
            />
        )
    }

    async onSubmit(values){
        await this.props.submitTweet(values)
    }
    firebase_submit = (e) => {
        e.preventDefault();
        console.log(this.props);
        console.log(e)
    }

    fileuploder = () => {
        var obj1 = document.getElementById("upfile");
        console.log(obj1.files)
        var reader = new FileReader();
        reader.readAsDataURL(obj1.files[0]);
        console.log(reader)
    }

    handleFileSubmit = () => {
        var obj1 = document.getElementById("upfile");
        console.log(obj1.files)
        var reader = new FileReader();
        var blob = new Blob(obj1.files, { type: "image/jpg" });
        console.warn(blob);
        this.props.submitTestImage(blob)
    }

    render(){
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }
        return(
            <div id={css.modalOverlay}>
                <div id={css.modalContent}>
                    <div>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                            <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
                            <RaisedButton label="Submit" type="submit" style={style} />
                        </form>

                        <form onSubmit={this.handleFileSubmit.bind(this)}>
                            <input type="file" name="upfile" id="upfile" onChange={this.handleFileSubmit.bind(this)}/> 
                            <RaisedButton label="Submit" type="submit" style={style} />
                        </form>

                    </div>
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
const mapDispatchToProps = ({ submitTweet, submitTestImage })
export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'contentsContainerForm' })(ContentsContainer)
)