import React, { Component } from 'react';
import TopContent from './TopContent'
import MiddleContent from './MiddleContent'
import BottomContent from './BottomContent'
import ComposedChartContainer from './ComposedChartContainer'
import classes from '../../assets/managementPage/MainContent.css'

class MainContent extends Component {
    render(){
        return(
            <div>
                <TopContent />
                <MiddleContent />
                <BottomContent />
                <ComposedChartContainer height={500} />
            </div>
        )
    }
}

export default MainContent;
