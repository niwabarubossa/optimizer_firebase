import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import css from '../../../assets/userPage/container/ButtonContainer.css'

class ButtonContainer extends Component {
    render(){
        return(
            <div className={css.buttonContainer}>
                <div>
                    フォロー
                    <p className={css.counter}>801人</p>
                </div>
                <div>
                    フォロワー
                    <p className={css.counter}>801人</p>
                </div>
                <div>
                    ツイート
                    <p className={css.counter}>801</p>
                </div>
            </div>
        )
    }
}

export default ButtonContainer;