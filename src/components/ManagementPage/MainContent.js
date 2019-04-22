import React, { Component } from 'react';
import TopContent from './TopContent'
import MiddleContent from './MiddleContent'
import BottomContent from './BottomContent'

import classes from '../../assets/managementPage/MainContent.css'
class MainContent extends Component {
    render(){
        return(
            <div>
                <TopContent />
                <MiddleContent />
                <BottomContent />
            </div>
        )
    }
}

export default MainContent;
