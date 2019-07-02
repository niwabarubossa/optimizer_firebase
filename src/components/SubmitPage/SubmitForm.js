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
import MenuItem from '@material-ui/core/MenuItem';


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
        console.log(values)
        this.props.history.push('/management')
        await this.props.submitTweet(this.props.current_user,this.props.user_in_firestore,values)
        // await this.props.submitTweet(this.props.current_user,values)
        // await this.props.submitTestImage(blob,file_name, values)
    }


    render(){

        // const minValue = min => value =>
        // value && value < min ? `Must be at least ${min}` : undefined
        // const minValue18 = minValue(18)
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 5 }
        return(
                    <div className={css.formContainer}>
                        <form onSubmit={handleSubmit(this.onSubmit)} className={css.form}>
                            {/* <div><Field label="Score" name="score" type="number" component={this.renderScoreField} validate={[ minValue18 ]} /></div>
                         */}
                            <div><Field label="Score" name="score" type="number" component={this.renderScoreField} /></div>
                            <div><Field label="Body" name="body" type="text" component={this.renderContentField} /></div>
                            {/* <div><Field label="Body" name="image" type="file" component={FieldFileInput} /></div> */}
                            <Field name="favoriteColor" component="select">
                                <option value="-100">-100</option>
                                <option value="-99">-99</option>
                                <option value="-98">-98</option>
                                <option value="-97">-97</option>
                                <option value="-96">-96</option>
                                <option value="-95">-95</option>
                                <option value="-94">-94</option>
                                <option value="-93">-93</option>
                                <option value="-92">-92</option>
                                <option value="-91">-91</option>
                                <option value="-90">-90</option>
                                <option value="-89">-89</option>
                                <option value="-88">-88</option>
                                <option value="-87">-87</option>
                                <option value="-86">-86</option>
                                <option value="-85">-85</option>
                                <option value="-84">-84</option>
                                <option value="-83">-83</option>
                                <option value="-82">-82</option>
                                <option value="-81">-81</option>
                                <option value="-80">-80</option>
                                <option value="-79">-79</option>
                                <option value="-78">-78</option>
                                <option value="-77">-77</option>
                                <option value="-76">-76</option>
                                <option value="-75">-75</option>
                                <option value="-74">-74</option>
                                <option value="-73">-73</option>
                                <option value="-72">-72</option>
                                <option value="-71">-71</option>
                                <option value="-70">-70</option>
                                <option value="-69">-69</option>
                                <option value="-68">-68</option>
                                <option value="-67">-67</option>
                                <option value="-66">-66</option>
                                <option value="-65">-65</option>
                                <option value="-64">-64</option>
                                <option value="-63">-63</option>
                                <option value="-62">-62</option>
                                <option value="-61">-61</option>
                                <option value="-60">-60</option>
                                <option value="-59">-59</option>
                                <option value="-58">-58</option>
                                <option value="-57">-57</option>
                                <option value="-56">-56</option>
                                <option value="-55">-55</option>
                                <option value="-54">-54</option>
                                <option value="-53">-53</option>
                                <option value="-52">-52</option>
                                <option value="-51">-51</option>
                                <option value="-50">-50</option>
                                <option value="-49">-49</option>
                                <option value="-48">-48</option>
                                <option value="-47">-47</option>
                                <option value="-46">-46</option>
                                <option value="-45">-45</option>
                                <option value="-44">-44</option>
                                <option value="-43">-43</option>
                                <option value="-42">-42</option>
                                <option value="-41">-41</option>
                                <option value="-40">-40</option>
                                <option value="-39">-39</option>
                                <option value="-38">-38</option>
                                <option value="-37">-37</option>
                                <option value="-36">-36</option>
                                <option value="-35">-35</option>
                                <option value="-34">-34</option>
                                <option value="-33">-33</option>
                                <option value="-32">-32</option>
                                <option value="-31">-31</option>
                                <option value="-30">-30</option>
                                <option value="-29">-29</option>
                                <option value="-28">-28</option>
                                <option value="-27">-27</option>
                                <option value="-26">-26</option>
                                <option value="-25">-25</option>
                                <option value="-24">-24</option>
                                <option value="-23">-23</option>
                                <option value="-22">-22</option>
                                <option value="-21">-21</option>
                                <option value="-20">-20</option>
                                <option value="-19">-19</option>
                                <option value="-18">-18</option>
                                <option value="-17">-17</option>
                                <option value="-16">-16</option>
                                <option value="-15">-15</option>
                                <option value="-14">-14</option>
                                <option value="-13">-13</option>
                                <option value="-12">-12</option>
                                <option value="-11">-11</option>
                                <option value="-10">-10</option>
                                <option value="-9">-9</option>
                                <option value="-8">-8</option>
                                <option value="-7">-7</option>
                                <option value="-6">-6</option>
                                <option value="-5">-5</option>
                                <option value="-4">-4</option>
                                <option value="-3">-3</option>
                                <option value="-2">-2</option>
                                <option value="-1">-1</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                                <option value="60">60</option>
                                <option value="61">61</option>
                                <option value="62">62</option>
                                <option value="63">63</option>
                                <option value="64">64</option>
                                <option value="65">65</option>
                                <option value="66">66</option>
                                <option value="67">67</option>
                                <option value="68">68</option>
                                <option value="69">69</option>
                                <option value="70">70</option>
                                <option value="71">71</option>
                                <option value="72">72</option>
                                <option value="73">73</option>
                                <option value="74">74</option>
                                <option value="75">75</option>
                                <option value="76">76</option>
                                <option value="77">77</option>
                                <option value="78">78</option>
                                <option value="79">79</option>
                                <option value="80">80</option>
                                <option value="81">81</option>
                                <option value="82">82</option>
                                <option value="83">83</option>
                                <option value="84">84</option>
                                <option value="85">85</option>
                                <option value="86">86</option>
                                <option value="87">87</option>
                                <option value="88">88</option>
                                <option value="89">89</option>
                                <option value="90">90</option>
                                <option value="91">91</option>
                                <option value="92">92</option>
                                <option value="93">93</option>
                                <option value="94">94</option>
                                <option value="95">95</option>
                                <option value="96">96</option>
                                <option value="97">97</option>
                                <option value="98">98</option>
                                <option value="99">99</option>
                                <option value="100">100</option>
                            </Field>
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