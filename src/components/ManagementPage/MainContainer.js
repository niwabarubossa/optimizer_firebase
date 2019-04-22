import React, { Component } from 'react';
import MainContent from './MainContent'
import classes from '../../assets/managementPage/MainContainer.css'
class MainContainer extends Component {
    render(){
        return(
            <div className={classes.managementMainContainer}>
                <MainContent />
            </div>
        )
    }
}

export default MainContainer;
