import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,ComposedChart,Area,Line
  } from 'recharts';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400,},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210,},
    {name: 'Page C', uv: 2000, pv:3800, amt: 2290,},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000,},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181,},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500,},
    {name: 'Page G', uv: 390, pv: 4300, amt: 2100,},
    {name: 'Page H', uv: 3550, pv: 2800, amt: 2100,},
    {name: 'Page I', uv: 4790, pv: 4300, amt: 2100,},
    {name: 'Page J', uv: 990, pv: 3300, amt: 2100,},
    {name: 'Page J', uv: 3490, pv: 1300, amt: 2100,},
    {name: 'Page J', uv: 5690, pv: 4300, amt: 2100,},
    {name: 'Page J', uv: 2390, pv: 2300, amt: 2100,},
    {name: 'Page G', uv: 390, pv: 4300, amt: 2100,},
    {name: 'Page G', uv: 390, pv: 4300, amt: 2100,},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181,},
  ];

class ComposedChartContainer extends Component {
    render(){
        return(
            <div className={classes.chartContainer}>
                <div className={classes.barChartContainer}>
                  <ResponsiveContainer width="100%" height={this.props.height} style={{zIndex: 1}} >
                    {/* <ComposedChart width="100%" height={250} data={data}> */}
                    <ComposedChart height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="amt" fill="#d7f0f6" stroke="#78e8ff" />
                    {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
                    <Area type="monotone" dataKey="uv" fill="#e4f8de" stroke="#32cd32" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default ComposedChartContainer;