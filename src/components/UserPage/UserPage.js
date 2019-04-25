import React, { Component } from 'react';
import { getDisplayUserInformation } from '../../actions'
import { connect } from 'react-redux'
import UserPageChild from './UserPageChild'
import UserProfileContainer from './container/UserProfileContainer'
class UserPage extends Component {

    componentDidMount(){
        this.props.getDisplayUserInformation(this.props.match.params.id)
    }

    render(){
        return(
            <div style={{color: 'black'}}>
            <h3>this is a match params id</h3>
                <h3>{this.props.match.params.id}</h3>
                <UserPageChild props={this.props} /> */}
                <UserProfileContainer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {    
  return { 
    display_user_uid: state.firebase.display_user_uid
  }
}

const mapDispatchToProps = ({ getDisplayUserInformation })

export default connect(mapStateToProps,mapDispatchToProps)(UserPage)