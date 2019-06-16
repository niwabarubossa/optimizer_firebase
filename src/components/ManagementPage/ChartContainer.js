import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'
import ComposedChartContainer from './ComposedChartContainer'
import { getPosts,getWeeklyPosts,getCurrentState } from '../../actions'
import { connect } from 'react-redux'

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';

//   const data = [
//     {name: 'Page A', uv: 234, pv: 12, amt: 2400,},
//     {name: 'Page B', uv: 255, pv: 12, amt: 2210,},
//     {name: 'Page C', uv: 255, pv:15, amt: 2290,},
//     {name: 'Page D', uv: 278, pv: 18, amt: 2000,},
//     {name: 'Page E', uv: 256, pv: 19, amt: 2181,},
//     {name: 'Page F', uv: 290, pv: 19, amt: 2500,},
//     {name: 'Page G', uv: 390, pv: 20, amt: 2100,},
//     {name: 'Page H', uv: 400, pv: 24, amt: 2100,},
//     {name: 'Page I', uv: 402, pv: 26, amt: 2100,},
//     {name: 'Page J', uv: 403, pv: 27, amt: 2100,},
//     {name: 'Page J', uv: 412, pv: 27, amt: 2100,},
//     {name: 'Page J', uv: 400, pv: 28, amt: 2100,},
//     {name: 'Page J', uv: 420, pv: 28, amt: 2100,},
//     {name: 'Page G', uv: 445, pv: 28, amt: 2100,},
//     {name: 'Page G', uv: 450, pv: 30, amt: 2100,},
//     {name: 'Page E', uv: 455, pv: 31, amt: 2181,},
// ];

class ChartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            local_molded_data:null
            //  [
            //     {name: 'Page A', total_score_amount: 234, total_action_amount: 12},
            //     {name: 'Page B', total_score_amount: 255, total_action_amount: 12},
            //     {name: 'Page C', total_score_amount: 255, total_action_amount:15},
            //     {name: 'Page D', total_score_amount: 278, total_action_amount: 18},
            //     {name: 'Page E', total_score_amount: 256, total_action_amount: 19},
            //     {name: 'Page F', total_score_amount: 290, total_action_amount: 19},
            //     {name: 'Page G', total_score_amount: 390, total_action_amount: 20},
            //     {name: 'Page H', total_score_amount: 400, total_action_amount: 24},
            //     {name: 'Page I', total_score_amount: 402, total_action_amount: 26},
            //     {name: 'Page J', total_score_amount: 403, total_action_amount: 27},
            //     {name: 'Page J', total_score_amount: 412, total_action_amount: 27},
            //     {name: 'Page J', total_score_amount: 400, total_action_amount: 28},
            //     {name: 'Page J', total_score_amount: 420, total_action_amount: 28},
            //     {name: 'Page G', total_score_amount: 445, total_action_amount: 28},
            //     {name: 'Page G', total_score_amount: 450, total_action_amount: 30},
            //     {name: 'Page E', total_score_amount: 455, total_action_amount: 31},
            // ]
        }
        // this.data = [
        //     {name: 'Page A', total_score_amount: 234, total_action_amount: 12},
        //     {name: 'Page B', total_score_amount: 255, total_action_amount: 12},
        //     {name: 'Page C', total_score_amount: 255, total_action_amount:15},
        //     {name: 'Page D', total_score_amount: 278, total_action_amount: 18},
        //     {name: 'Page E', total_score_amount: 256, total_action_amount: 19},
        //     {name: 'Page F', total_score_amount: 290, total_action_amount: 19},
        //     {name: 'Page G', total_score_amount: 390, total_action_amount: 20},
        //     {name: 'Page H', total_score_amount: 400, total_action_amount: 24},
        //     {name: 'Page I', total_score_amount: 402, total_action_amount: 26},
        //     {name: 'Page J', total_score_amount: 403, total_action_amount: 27},
        //     {name: 'Page J', total_score_amount: 412, total_action_amount: 27},
        //     {name: 'Page J', total_score_amount: 400, total_action_amount: 28},
        //     {name: 'Page J', total_score_amount: 420, total_action_amount: 28},
        //     {name: 'Page G', total_score_amount: 445, total_action_amount: 28},
        //     {name: 'Page G', total_score_amount: 450, total_action_amount: 30},
        //     {name: 'Page E', total_score_amount: 455, total_action_amount: 31},
        // ];
      }

      async componentWillMount(){
        await this.props.getPosts()
        await this.props.getWeeklyPosts()
        //累計スコアの算出
        var all_score = 0;
        for(i=0 ; i<this.props.tweets.length ; i++){
            if(this.props.tweets[i].score){
                all_score += this.props.tweets[i].score;
            }
        }
        var total_minus =0;
        var i;
        var hairetu = [];
        for(i= (this.props.weekly_posts.length-1) ; i>=0 ; i--){
            // hairetu.push(this.props.weekly_posts[i].score);
            if(this.props.weekly_posts[i].score){
                total_minus -= this.props.weekly_posts[i].score
                hairetu.unshift(total_minus)
            }
        }
        var temp_hairetu = []
        for(i=0;i<this.props.weekly_posts.length;i++){
            var temp = {name: i,
                        total_score_amount: (all_score+hairetu[i])
                    }
            temp_hairetu.push(temp)
        }
        // {name: 'Page A', total_score_amount: 234, total_action_amount: 12},
        this.setState({local_molded_data: temp_hairetu})
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
    tweets: state.firebase.items,
    weekly_posts: state.firebase.weekly_posts
  }
}
const mapDispatchToProps = ({ getPosts,getWeeklyPosts,getCurrentState })
export default connect( mapStateToProps,mapDispatchToProps)(ChartContainer)