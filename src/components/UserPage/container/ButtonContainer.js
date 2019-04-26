import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import css from '../../../assets/userPage/container/ButtonContainer.css'

class ButtonContainer extends Component {
    render(){
        return(
            <div>
                <Button variant="contained" color="primary" >
                    Follow
                </Button>
                <Button variant="contained" color="primary">
                    Follower
                </Button>
                <Button variant="contained" color="primary">
                    Something
                </Button>
            </div>
        )
    }
}

export default ButtonContainer;