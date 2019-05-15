import React, { Component } from 'react';
import css from '../../../assets/userPage/container/UserProfileContainer.css'
import ButtonContainer from './ButtonContainer'
import { getDisplayUserInformation } from '../../../actions'
import { connect } from 'react-redux'
import UserInformation from '../UserInformation'
import UserImage from '../UserImage'

class UserProfileContainer extends Component {

    componentDidMount(){
        // this.props.getDisplayUserInformation(this.props.match.params.id)
    }

    render(){
        return(
            <div className={css.userProfileContainer}>
                <UserImage />
                <UserInformation />
                {/* <ButtonContainer /> */}
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

export default connect(mapStateToProps,mapDispatchToProps)(UserProfileContainer)