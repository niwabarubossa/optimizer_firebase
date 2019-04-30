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
import FieldFileInput from './FieldFileInput'

class ContentsContainer extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
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
        console.log(values.image)
        var blob = new Blob([values.image], { type: "image/jpg" });
        var file_name = values.image.name
        await this.props.submitTestImage(blob,file_name, values)
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
                            <div><Field label="Body" name="image" type="file" component={FieldFileInput} /></div>

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