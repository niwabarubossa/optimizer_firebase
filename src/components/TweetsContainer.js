import React, { Component } from 'react';
import TweetContainer from './TweetContainer'

import '../assets/TweetContainer.css'

class TweetsContainer extends Component {
    render(){
        return(
            <div className="tweetsContainer">
                <TweetContainer />
                <TweetContainer />
                <TweetContainer />
                <TweetContainer />
            </div>
        )
    }
}

export default TweetsContainer;
