import React, { Component } from 'react';
import css from '../../assets/managementPage/ColorBoxContent.css'

class ColorBoxContent extends Component {
    render(){
        return(
            <div className={css.colorBoxContent}>
                <p>{this.props.header}</p>
                <p className={css.colorBoxScore}>{this.props.score}</p>
                {/* <p>this is a content</p> */}
            </div>
        )
    }
}

export default ColorBoxContent;
