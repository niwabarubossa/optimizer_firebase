import React, { Component } from 'react';
import ColorBox from './ColorBox'
import classes from '../../assets/managementPage/TopContent.css'
import {Grid} from "@material-ui/core"
import { getUserChartInformation,getUserInformation } from '../../actions'
import { connect } from 'react-redux'

class TopContent extends Component {

    // async componentWillMount(){
    //     // await this.props.getUserInformation()
    //     if(this.props.current_user)
    //         await this.props.getUserChartInformation(this.props.current_user.uid)
    // }

    async componentDidMount(){
        await this.props.getUserInformation()
        if(this.props.current_user){
            console.log('thsis.props.current_user exist')
            await this.props.getUserChartInformation(this.props.current_user.uid)
        }else{
            console.log('thsis.props.current_user does not exist')
        }
    }

    render(){
        return(
            <div className={classes.topContentContainer}>
                <Grid container>
                    <Grid item xs={6} lg={3}>
                        {
                            this.props.chart_user ?
                            <ColorBox style={{backgroundColor: '#1fa8d8'}} header='総改善数' score={this.props.chart_user.total_action_amount} />
                            :
                            <ColorBox style={{backgroundColor: '#1fa8d8'}} header='総改善数' score="" />
                        }
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        {
                            this.props.chart_user ?
                            <ColorBox style={{backgroundColor: '#63c2de'}} header='累積スコア' score={this.props.chart_user.total_score_amount} />
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
      chart_user: state.firebase.chart_user
    }
  }
  
  const mapDispatchToProps = ({ getUserChartInformation,getUserInformation })
  
  export default connect( mapStateToProps,mapDispatchToProps )(TopContent)