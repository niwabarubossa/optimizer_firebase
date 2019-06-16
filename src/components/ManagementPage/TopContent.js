import React, { Component } from 'react';
import ColorBox from './ColorBox'
import classes from '../../assets/managementPage/TopContent.css'
import {Grid} from "@material-ui/core"
import { getUserChartInformation,getUserInformation } from '../../actions'
import { connect } from 'react-redux'
import firebase from 'firebase'
class TopContent extends Component {

    // async componentWillMount(){
        // await this.props.getUserInformation()
    //     if(this.props.current_user)
    //         await this.props.getUserChartInformation(this.props.current_user.uid)
    // }

    // async componentDidMount(){
    //     await this.props.getUserInformation()
        // if(this.props.current_user){
        //     console.log('thsis.props.current_user exist')
        //     await this.props.getUserChartInformation(this.props.current_user.uid)
        // }else{
        //     console.log('thsis.props.current_user does not exist')
        // }
    // }
    async componentWillMount() {
        // await this.props.getUserChartInformation(now_user[0].uid)
    }

    render(){
        return(
            <div className={classes.topContentContainer}>
                <Grid container>
                    <Grid item xs={6} lg={3}>
                        {
                            this.props.user_in_firestore ?
                            <ColorBox style={{backgroundColor: '#1fa8d8'}} header='総改善数' score={this.props.user_in_firestore.total_action_amount} />
                            :
                            <ColorBox style={{backgroundColor: '#1fa8d8'}} header='総改善数' score="" />
                        }
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        {
                            this.props.user_in_firestore ?
                            <ColorBox style={{backgroundColor: '#63c2de'}} header='累積スコア' score={this.props.user_in_firestore.total_score_amount} />
                            :
                            <ColorBox style={{backgroundColor: '#63c2de'}} header='累積スコア' score='' />
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
    //   total_score_amount: state.firebase.total_score_amount,
    //   total_action_amount: state.firebase.total_action_amount,
      current_user: state.firebase.current_user,
      user_in_firestore: state.firebase.user_in_firestore
    }
  }
  
  const mapDispatchToProps = ({ getUserChartInformation,getUserInformation })
  
  export default connect( mapStateToProps,mapDispatchToProps )(TopContent)