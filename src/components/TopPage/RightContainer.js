import React, { Component } from 'react';
import ContentsHeader from './ContentsHeader'
import classes from '../../assets/mainPage/RightContainer.css'
import TrendContainer from './TrendContainer'
import RankingContainer from './RankingContainer'
import ChartContainer from '../ManagementPage/ChartContainer'

class RightContainer extends Component {
    render(){
        return(
            <div>
                <ContentsHeader content={'記録'} />
                    <ChartContainer height={300} />
                <ContentsHeader content={'ランキング'} />
                    <RankingContainer />
                <ContentsHeader content={'トレンド'} />
                    <TrendContainer />
            </div>
        )
    }
}

export default RightContainer;
