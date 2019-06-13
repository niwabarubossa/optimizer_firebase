import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'
import {
    Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,ComposedChart,Area
  } from 'recharts';

class ComposedChartContainer extends Component {
    constructor(props) {
      super(props);
    }

    //this.props.tweets　に入っているから、そこから成型すれば良い。
    // display user の全てのtweets　を取ってきて、それの合計をだす。　（１週間前までの） そこから　１つずつ足していく
    //cloud functionsで監視が必要
    //cloud functions で １週間前、　１ヶ月前、１年前までのスコア合計を計算しておいて、user　に持たせておく？
    // score: total_score_before_week + tweet.score 

    testClick(){
        console.log(this.props)
    }

    render(){
        return(
            <div className={classes.chartContainer}>
                <div className={classes.barChartContainer}>

                  { this.props.weekly_posts && this.props.weekly_posts.map(weekly_post => {
                    return (
                        <div key={weekly_post.tweet_id} height={400} onClick={this.testClick.bind(this)}>
                        this is .....
                          {weekly_post.score}
                        </div>
                    )
                })}  

                  <ResponsiveContainer width="100%" height={this.props.height} style={{zIndex: 1}} >
                    <ComposedChart height={250} data={this.props.local_molded_data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="total_score_amount" barSize={20} fill="#1fa8d8" />
                    </ComposedChart>
                  </ResponsiveContainer>

                  <ResponsiveContainer width="100%" height={this.props.height} style={{zIndex: 1}} >
                    <ComposedChart height={250} data={this.props.local_molded_data}>
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