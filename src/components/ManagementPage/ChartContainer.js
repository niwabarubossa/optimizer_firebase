import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'
import ComposedChartContainer from './ComposedChartContainer'
import { getPosts } from '../../actions'
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

    componentWillMount(){
        this.props.getPosts()
    }
    
    constructor(props) {
        super(props);
        this.data = [
            {name: 'Page A', total_score_amount: 234, total_action_amount: 12},
            {name: 'Page B', total_score_amount: 255, total_action_amount: 12},
            {name: 'Page C', total_score_amount: 255, total_action_amount:15},
            {name: 'Page D', total_score_amount: 278, total_action_amount: 18},
            {name: 'Page E', total_score_amount: 256, total_action_amount: 19},
            {name: 'Page F', total_score_amount: 290, total_action_amount: 19},
            {name: 'Page G', total_score_amount: 390, total_action_amount: 20},
            {name: 'Page H', total_score_amount: 400, total_action_amount: 24},
            {name: 'Page I', total_score_amount: 402, total_action_amount: 26},
            {name: 'Page J', total_score_amount: 403, total_action_amount: 27},
            {name: 'Page J', total_score_amount: 412, total_action_amount: 27},
            {name: 'Page J', total_score_amount: 400, total_action_amount: 28},
            {name: 'Page J', total_score_amount: 420, total_action_amount: 28},
            {name: 'Page G', total_score_amount: 445, total_action_amount: 28},
            {name: 'Page G', total_score_amount: 450, total_action_amount: 30},
            {name: 'Page E', total_score_amount: 455, total_action_amount: 31},
        ];
      }

    render(){
        return(
            <div className={classes.chartContainer}>
                <div className={classes.barChartContainer}>

                  <ComposedChartContainer height={500} new_data={this.data} tweets={this.props.tweets} />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
  return { 
	tweets: state.firebase.items
  }
}
const mapDispatchToProps = ({ getPosts })
export default connect( mapStateToProps,mapDispatchToProps)(ChartContainer)