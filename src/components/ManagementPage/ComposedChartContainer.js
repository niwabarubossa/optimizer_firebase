import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'
import {
    Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,ComposedChart,Area
  } from 'recharts';

class ComposedChartContainer extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return(
            <div className={classes.chartContainer}>
                <div className={classes.barChartContainer}>

                  { this.props.tweets && this.props.tweets.map(tweet => {
                    return (
                        <div key={tweet.tweet_id} height={400}>
                        this is .....
                          {tweet.body}
                        </div>
                    )
                })}  

                  <ResponsiveContainer width="100%" height={this.props.height} style={{zIndex: 1}} >
                    <ComposedChart height={250} data={this.props.new_data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="total_action_amount" barSize={20} fill="#1fa8d8" />
                    </ComposedChart>
                  </ResponsiveContainer>

                  <ResponsiveContainer width="100%" height={this.props.height} style={{zIndex: 1}} >
                    <ComposedChart height={250} data={this.props.new_data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="total_score_amount" fill="#63c2de" stroke="#63c2de" />
                    </ComposedChart>
                  </ResponsiveContainer>

                </div>
            </div>
        )
    }
}

export default ComposedChartContainer;