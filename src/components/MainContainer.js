import React, { Component } from 'react';

import '../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'

class MainContainer extends Component {
    render(){
        return(
            <div className="mainContainer">
                <TweetsContainer />
            </div>
        )
    }
}

export default MainContainer;