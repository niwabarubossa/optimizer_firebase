import React, { Component } from 'react';
import css from '../../assets/userPage/UserInformation.css'

class UserInformation extends Component {
    render(){
        return(
            <div>
                <h4>{this.props.user_name}</h4>
                <div className={css.profile}>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                </div>
            </div>
        )
    }
}

export default UserInformation;
