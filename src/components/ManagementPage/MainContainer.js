import React, { Component } from 'react';
import MainContent from './MainContent'
import classes from '../../assets/managementPage/MainContainer.css'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentsContainer from '../TopPage/ContentsContainer'

import { handleDrawerToggleReset } from '../../actions'
import { connect } from 'react-redux'

class MainContainer extends Component {

    constructor() {
        super();
        this.state = {
          showPopup: false
        };
    }
    componentDidMount(){
        this.props.handleDrawerToggleReset()
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
            zIndex: 10
        }

        return(
            <div className={classes.managementMainContainer}>
                <MainContent />
            </div>
        )
    }
}

const mapDispatchToProps = ({ handleDrawerToggleReset })
export default connect( null ,mapDispatchToProps)(MainContainer)
