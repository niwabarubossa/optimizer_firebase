import React, { Component } from 'react';
import { getDisplayUserInformation } from '../../actions'
import { connect } from 'react-redux'
import UserPageChild from './UserPageChild'
import UserProfileContainer from './container/UserProfileContainer'
import ContentCardContainer from '../TopPage/ContentCardContainer'
class UserPage extends Component {

    componentDidMount(){
        this.props.getDisplayUserInformation(this.props.match.params.id)
    }

    render(){
        return(
            <div style={{color: 'black',display: 'flex',justifyContent: 'center',flexDirection: 'column'}}>
                {/* <h3>this is a match params id</h3>
                <h3>{this.props.match.params.id}</h3> */}
                <UserProfileContainer props={this.props} />
                <ContentCardContainer />
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