import React, { Component } from 'react';
import TopContent from './TopContent'
import MiddleContent from './MiddleContent'
import BottomContent from './BottomContent'
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
                <BottomContent />
                <Grid container spacing={16} >
                    <Grid item xs={12} md={6}>
                        <ComposedChartContainer height={500} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RadarChartContainer height={500} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainContent;
