import React, { Component } from 'react';
import css from '../../../assets/userPage/container/UserProfileContainer.css'
import ButtonContainer from './ButtonContainer'
class UserProfileContainer extends Component {
    render(){
        return(
            <div className={css.userProfileContainer}>
                this is a user procile container
                <ButtonContainer />
            </div>
        )
    }
}

export default UserProfileContainer;