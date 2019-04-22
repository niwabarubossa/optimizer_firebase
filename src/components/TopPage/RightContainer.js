import React, { Component } from 'react';
import ContentsHeader from './ContentsHeader'
import classes from '../../assets/mainPage/RightContainer.css'
import TrendContainer from './TrendContainer'
import RankingContainer from './RankingContainer'
class RightContainer extends Component {
    render(){
        return(
            <div>
                <ContentsHeader content={'記録'} />
                <div className={classes.sample_box}>
                </div>
                <ContentsHeader content={'ランキング'} />
                    <RankingContainer />
                <ContentsHeader content={'トレンド'} />
                    <TrendContainer />
            </div>
        )
    }
}

export default RightContainer;
