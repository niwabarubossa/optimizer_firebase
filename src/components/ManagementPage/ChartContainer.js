import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'
import ComposedChartContainer from './ComposedChartContainer'
import { getPosts,getWeeklyPosts,getCurrentState,getUserInformation,set_current_user_and_in_firestore } from '../../actions'
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
            await this.props.set_current_user_and_in_firestore(this.props.current_user)
            var all_score = 0;
            var all_action_amount = (this.props.tweets.length) + 1;
            for(i=0 ; i<this.props.tweets.length ; i++){
                if(this.props.tweets[i].score){
                    all_score += this.props.tweets[i].score;
                }
            }
            var total_minus =0;
            var i,j;
            var milliseconds_array = []
            var weekly_score_array = [0,0,0,0,0,0,0,0]
            var total_action_amount = this.props.user_in_firestore.total_action_amount
            var weekly_amount_array =[0,0,0,0,0,0,0,0]

            for(i=0;i<=7;i++){
                var today = new Date()
                var i_days_before_miliseconds = new Date().setDate(new Date().getDate() - i);
                var i_day = new Date(i_days_before_miliseconds)
                milliseconds_array.unshift(i_day.setHours(0,0,0,0))
            }
            for(i=0 ; i<=(this.props.weekly_posts.length-1) ;i++){
                if((milliseconds_array[0] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[1])){
                    weekly_score_array[0] += this.props.tweets[i].score
                    weekly_amount_array[0]++;
                }
                else if((milliseconds_array[1] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[2])){
                    weekly_score_array[1] += this.props.tweets[i].score
                    weekly_amount_array[1]++;
                }
                else if((milliseconds_array[2] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[3])){
                    weekly_score_array[2] += this.props.tweets[i].score
                    weekly_amount_array[2]++;
                }
                else if((milliseconds_array[3] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[4])){
                    weekly_score_array[3] += this.props.tweets[i].score
                    weekly_amount_array[3]++;
                }
                else if((milliseconds_array[4] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[5])){
                    weekly_score_array[4] += this.props.tweets[i].score
                    weekly_amount_array[4]++;
                }
                else if((milliseconds_array[5] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[6])){
                    weekly_score_array[5] += this.props.tweets[i].score
                    weekly_amount_array[5]++;
                }
                else if((milliseconds_array[6] <= this.props.tweets[i].created_at) && (this.props.tweets[i].created_at <= milliseconds_array[7])){
                    weekly_score_array[6] += this.props.tweets[i].score
                    weekly_amount_array[6]++;
                }
                else if( (milliseconds_array[7] <= this.props.tweets[i].created_at) ){
                    weekly_score_array[7] += this.props.tweets[i].score
                    weekly_amount_array[7]++;
                }
                else{
                }
            }
            console.log('---------weekly score array')
            console.log(weekly_score_array)
            console.log('---------weekly score array')
            var hairetu = [];
            var action_num_hairetu = []
            var total_action_minus = 0;
            for(i= (weekly_score_array.length-1) ; i>=0 ; i--){
                    total_minus -= weekly_score_array[i]
                    total_action_minus -= weekly_amount_array[i]
                    hairetu.unshift(total_minus)
                    action_num_hairetu.unshift(total_action_minus)
            }

            var temp_hairetu = []
            for(i=0; i< hairetu.length -1 ;i++){
                var temp = {name: i,
                            // total_score_amount: (all_score+hairetu[i]),
                            累積スコア: (all_score+hairetu[i]),
                            総改善数: (all_action_amount+action_num_hairetu[i])
                        }
                temp_hairetu.push(temp)
            }
            var today = {
                name: 7,
                // total_score_amount: all_score,
                累積スコア: all_score,
                総改善数: all_action_amount,
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
    current_user: state.firebase.current_user,
    user_in_firestore: state.firebase.user_in_firestore
  }
}
const mapDispatchToProps = ({ getPosts,getWeeklyPosts,getCurrentState,getUserInformation,set_current_user_and_in_firestore })
export default connect( mapStateToProps,mapDispatchToProps)(ChartContainer)