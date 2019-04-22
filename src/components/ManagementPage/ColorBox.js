import React, { Component } from 'react';
import ColorBoxContent from './ColorBoxContent'
import classes from '../../assets/managementPage/ColorBox.css'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

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

