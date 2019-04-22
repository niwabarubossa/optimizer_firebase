import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDrawerToggleReset } from '../../actions'

class ManagementPage extends Component {
    componentWillMount(){
        this.props.handleDrawerToggleReset()
    }
    render(){
        return(
            <div style={{color: 'black'}}>
                <h1>I am a management Page</h1>
                <h1>I am a management Page</h1>
                <h1>I am a management Page</h1>
                <h1>I am a management Page</h1>
            </div>
        )
    }
}

const mapDispatchToProps = ({ handleDrawerToggleReset })
export default connect(null, mapDispatchToProps)(ManagementPage)