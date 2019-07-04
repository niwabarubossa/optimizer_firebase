import React, { Component } from 'react';
import classes from '../../assets/managementPage/MiddleContent.css'
import ChartContainer from './ChartContainer'
import ContentCardContainer from '../TopPage/ContentCardContainer'
class MiddleContent extends Component {
    render(){
        return(
            <div className={classes.middleContentContainer}>
                <ChartContainer height={450} />
                <ContentCardContainer />
            </div>
        )
    }
}

export default MiddleContent;
