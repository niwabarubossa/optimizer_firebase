import React, { Component } from 'react';
import classes from '../../assets/managementPage/MiddleContent.css'
import ChartContainer from './ChartContainer'
class MiddleContent extends Component {
    render(){
        return(
            <div className={classes.middleContentContainer}>
                <ChartContainer height={450} />
            </div>
        )
    }
}

export default MiddleContent;
