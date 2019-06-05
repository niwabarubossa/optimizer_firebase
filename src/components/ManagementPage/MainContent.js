import React, { Component } from 'react';
import TopContent from './TopContent'
import MiddleContent from './MiddleContent'
import ComposedChartContainer from './ComposedChartContainer'
import classes from '../../assets/managementPage/MainContent.css'
import RadarChartContainer from './RadarChartContainer'
import {Grid} from "@material-ui/core"

class MainContent extends Component {
    render(){
        return(
            <div>
                <TopContent />
                <MiddleContent />
            </div>
        )
    }
}

export default MainContent;
