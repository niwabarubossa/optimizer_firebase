import React, { Component } from 'react';
import classes from '../../assets/managementPage/ColorBoxContent.css'

class ColorBoxContent extends Component {
    render(){
        return(
            <div className={classes.colorBoxContent}>
                <p>this is a content</p>
                <p>this is a content</p>
                <p>this is a content</p>
            </div>
        )
    }
}

export default ColorBoxContent;
