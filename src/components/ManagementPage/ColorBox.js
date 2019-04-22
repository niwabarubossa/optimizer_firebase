import React, { Component } from 'react';
import ColorBoxContent from './ColorBoxContent'
import classes from '../../assets/managementPage/ColorBox.css'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class ColorBox extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    render(){
        const AddBtnStyle={
            position: "fixed",
            right: 12,
            bottom: 12,
            zIndex: 2
        }

        return(
            <React.Fragment>
                <div className={classes.colorBoxContainer}>
                    <div className={classes.colorBox} style={this.props.style} onClick={this.togglePopup.bind(this)} >
                        <ColorBoxContent />
                        {/* {this.state.showPopup ? 
                            <Popup
                            text='Close Me'
                            closePopup={this.togglePopup.bind(this)}
                            />
                            : null
                        } */}
                    </div>
                </div>

                <FloatingActionButton style={AddBtnStyle} onClick={this.togglePopup.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
            </React.Fragment>
        )
    }
}


export default ColorBox;

