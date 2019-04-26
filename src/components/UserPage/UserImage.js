import React, { Component } from 'react';
import css from '../../assets/userPage/UserImage.css'

class UserImage extends Component {
    render(){
        return(
            <div className={css.userImageContainer}>
                <img className={css.testImage} src="https://www.homepage-tukurikata.com/image/lion.jpg"></img>
            </div>
        )
    }
}

export default UserImage;
