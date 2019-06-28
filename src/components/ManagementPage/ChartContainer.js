import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'
import ComposedChartContainer from './ComposedChartContainer'
import { getPosts,getWeeklyPosts,getCurrentState,getUserInformation } from '../../actions'
import { connect } from 'react-redux'

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';

class ChartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            local_molded_data:null
        }
      }

    async componentDidMount(){
        await this.props.getPosts()
        if(this.props.current_user){
            await this.props.getWeeklyPosts(this.props.current_user.uid)
            this.componentDidUpdate.bind(this)
        }
    }

    async componentDidUpdate(prevProps) {
        　if ( prevProps.current_user != (this.props.current_user) || (this.state.local_molded_data) == null ) {
        　　await this.props.getWeeklyPosts(this.props.current_user.uid);
            //累計スコアの算出
            var all_score = 0;
            for(i=0 ; i<this.props.tweets.length ; i++){
                if(this.props.tweets[i].score){
                    all_score += this.props.tweets[i].score;
                }
            }
            var total_minus =0;
            var i,j;
            var hairetu = [];
            var milliseconds_array = []
            var weekly_score_array = [0,0,0,0,0,0,0,0]

            for(i=0;i<=7;i++){
                var today = new Date()
                var i_days_before_miliseconds = new Date().setDate(new Date().getDate() - i);
                var i_day = new Date(i_days_before_miliseconds)
                milliseconds_array.unshift(i_day.setHours(0,0,0,0))
            }
            for(i=0 ; i<=(this.props.weekly_posts.length-1) ;i++){
                if((milliseconds_array[0] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[1])){
                    weekly_score_array[0] += this.props.tweets[i].score
                }
                else if((milliseconds_array[1] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[2])){
                    weekly_score_array[1] += this.props.tweets[i].score
                }
                else if((milliseconds_array[2] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[3])){
                    weekly_score_array[2] += this.props.tweets[i].score
                }
                else if((milliseconds_array[3] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[4])){
                    weekly_score_array[3] += this.props.tweets[i].score
                }
                else if((milliseconds_array[4] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[5])){
                    weekly_score_array[4] += this.props.tweets[i].score
                }
                else if((milliseconds_array[5] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[6])){
                    weekly_score_array[5] += this.props.tweets[i].score
                }
                else if((milliseconds_array[6] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[7])){
                    weekly_score_array[6] += this.props.tweets[i].score
                }
                else if( (milliseconds_array[7] <= this.props.tweets[i].created_at) ){
                    weekly_score_array[7] += this.props.tweets[i].score
                }
                else{
                }
            }
            console.log('---------weekly score array')
            console.log(weekly_score_array)
            console.log('---------weekly score array')
            for(i= (weekly_score_array.length-1) ; i>=0 ; i--){
                    total_minus -= weekly_score_array[i]
                    hairetu.unshift(total_minus)
            }

            var temp_hairetu = []
            for(i=0; i< hairetu.length -1   ;i++){
                var temp = {name: i,
                            total_score_amount: (all_score+hairetu[i])
                        }
                temp_hairetu.push(temp)
            }
            var today = {
                name: 7,
                total_score_amount: all_score
            }
            temp_hairetu.push(today)
            this.setState({local_molded_data: temp_hairetu})
        }
    }

    render(){
        return(
            <div className={classes.chartContainer}>
                <div className={classes.barChartContainer}>
                  <ComposedChartContainer height={500} new_data={this.data} weekly_posts={this.props.weekly_posts} hairetu={this.hairetu} local_molded_data={this.state.local_molded_data} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
  return { 
    tweets: state.firebase.weekly_posts,
    weekly_posts: state.firebase.weekly_posts,
    current_user: state.firebase.current_user
  }
}
const mapDispatchToProps = ({ getPosts,getWeeklyPosts,getCurrentState,getUserInformation })
export default connect( mapStateToProps,mapDispatchToProps)(ChartContainer)