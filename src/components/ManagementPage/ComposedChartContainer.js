import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,ComposedChart,Area,Line
  } from 'recharts';

const data = [
    {name: 'Page A', uv: 234, pv: 12, amt: 2400,},
    {name: 'Page B', uv: 255, pv: 12, amt: 2210,},
    {name: 'Page C', uv: 255, pv:15, amt: 2290,},
    {name: 'Page D', uv: 278, pv: 18, amt: 2000,},
    {name: 'Page E', uv: 256, pv: 19, amt: 2181,},
    {name: 'Page F', uv: 290, pv: 19, amt: 2500,},
    {name: 'Page G', uv: 390, pv: 20, amt: 2100,},
    {name: 'Page H', uv: 400, pv: 24, amt: 2100,},
    {name: 'Page I', uv: 402, pv: 26, amt: 2100,},
    {name: 'Page J', uv: 403, pv: 27, amt: 2100,},
    {name: 'Page J', uv: 412, pv: 27, amt: 2100,},
    {name: 'Page J', uv: 400, pv: 28, amt: 2100,},
    {name: 'Page J', uv: 420, pv: 28, amt: 2100,},
    {name: 'Page G', uv: 445, pv: 28, amt: 2100,},
    {name: 'Page G', uv: 450, pv: 30, amt: 2100,},
    {name: 'Page E', uv: 455, pv: 31, amt: 2181,},
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
                    {/* <Area type="monotone" dataKey="amt" fill="#d7f0f6" stroke="#78e8ff" /> */}
                    <Bar dataKey="pv" barSize={20} fill="#1fa8d8" />
                    {/* <Area type="monotone" dataKey="uv" fill="#e4f8de" stroke="#32cd32" /> */}
                    </ComposedChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="100%" height={this.props.height} style={{zIndex: 1}} >
                    {/* <ComposedChart width="100%" height={250} data={data}> */}
                    <ComposedChart height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    {/* <Area type="monotone" dataKey="amt" fill="#d7f0f6" stroke="#78e8ff" /> */}
                    {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
                    <Area type="monotone" dataKey="uv" fill="#63c2de" stroke="#63c2de" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default ComposedChartContainer;