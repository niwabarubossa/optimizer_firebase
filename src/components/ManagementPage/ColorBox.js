import React, { Component } from 'react';
import ColorBoxContent from './ColorBoxContent'
import classes from '../../assets/managementPage/ColorBox.css'

class ColorBox extends Component {

    render(){
        return(
            <React.Fragment>
                <div className={classes.colorBoxContainer}>
                    <div className={classes.colorBox} style={this.props.style}>
                        <ColorBoxContent />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default ColorBox;

