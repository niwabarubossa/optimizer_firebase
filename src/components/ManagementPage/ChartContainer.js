import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'
import ComposedChartContainer from './ComposedChartContainer'

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
          snackbarOpen: false
        }
        // pv -> total_action_amount
        // uv -? total_score_amount
        this.data = [
            {name: 'Page A', total_score_amount: 234, pv: 12},
            {name: 'Page B', total_score_amount: 255, pv: 12},
            {name: 'Page C', total_score_amount: 255, pv:15},
            {name: 'Page D', total_score_amount: 278, pv: 18},
            {name: 'Page E', total_score_amount: 256, pv: 19},
            {name: 'Page F', total_score_amount: 290, pv: 19},
            {name: 'Page G', total_score_amount: 390, pv: 20},
            {name: 'Page H', total_score_amount: 400, pv: 24},
            {name: 'Page I', total_score_amount: 402, pv: 26},
            {name: 'Page J', total_score_amount: 403, pv: 27},
            {name: 'Page J', total_score_amount: 412, pv: 27},
            {name: 'Page J', total_score_amount: 400, pv: 28},
            {name: 'Page J', total_score_amount: 420, pv: 28},
            {name: 'Page G', total_score_amount: 445, pv: 28},
            {name: 'Page G', total_score_amount: 450, pv: 30},
            {name: 'Page E', total_score_amount: 455, pv: 31},
        ];
      }

    render(){
        return(
            <div className={classes.chartContainer}>
                <div className={classes.barChartContainer}>

                  <ComposedChartContainer height={500} new_data={this.data} />

                </div>
            </div>
        )
    }
}

export default ChartContainer;