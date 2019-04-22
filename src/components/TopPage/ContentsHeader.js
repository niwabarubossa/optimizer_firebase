import React, { Component } from 'react';
import classes from '../../assets/ContentsHeader.css'

class ContentsHeader extends Component {
    render(){
        return(
            <div className={classes.ContentsHeader}>
                {this.props.content}
            </div>
        )
    }
}

export default ContentsHeader;
