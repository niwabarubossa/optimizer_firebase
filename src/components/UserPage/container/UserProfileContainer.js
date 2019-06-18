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
            {
                this.props.current_user ? 
                <React.Fragment>
                    <UserImage photoURL={this.props.current_user.photoURL} />
                    <UserInformation user_name={this.props.current_user.displayName} />
                </React.Fragment>
                :
                <React.Fragment>
                    <UserImage photoURL="https://www.homepage-tukurikata.com/image/lion.jpg" />
                    <UserInformation user_name="none" />
                </React.Fragment>
            }
                {/* <ButtonContainer /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return { 
      display_user_uid: state.firebase.display_user_uid,
      current_user: state.firebase.current_user
    }
}

const mapDispatchToProps = ({ getDisplayUserInformation })

export default connect(mapStateToProps,mapDispatchToProps)(UserProfileContainer)