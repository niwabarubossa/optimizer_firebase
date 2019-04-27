import React, { Component } from 'react';
import classes from '../../assets/managementPage/ChartContainer.css'

import {
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,ResponsiveContainer
  } from 'recharts';

  const data = [
    {
      "subject": "Math",
      "A": 120,
      "B": 110,
      "fullMark": 150
    },
    {
      "subject": "Chinese",
      "A": 98,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "English",
      "A": 86,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "Geography",
      "A": 99,
      "B": 100,
      "fullMark": 150
    },
    {
      "subject": "Physics",
      "A": 85,
      "B": 90,
      "fullMark": 150
    },
    {
      "subject": "History",
      "A": 65,
      "B": 85,
      "fullMark": 150
    }
  ]

class ComposedChartContainer extends Component {
    render(){
        return(
            <div className={classes.chartContainer}>
                <div className={classes.barChartContainer}>
                  <ResponsiveContainer width="50%" height={this.props.height} style={{zIndex: 1}} >
                    <RadarChart outerRadius={90} width={730} height={250} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default ComposedChartContainer;