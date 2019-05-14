import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import css from '../../../assets/userPage/container/ButtonContainer.css'
import { followButtonClicked,getDisplayUserInformation } from '../../../actions'
import { connect } from 'react-redux'

class ButtonContainer extends Component {

    async clicked(){
        await this.props.followButtonClicked( this.props.current_user , this.props.display_user)
    }

    render(){
        return(
            <React.Fragment>
            <div className={css.buttonContainer}>
                <div onClick={this.clicked.bind(this)}>
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
            <div className={css.buttonContainer}>
                <Button variant="outlined" color="primary" onClick={this.clicked.bind(this)}>
                    フォロー
                </Button>
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {    
    return { 
      current_user: state.firebase.current_user,
      display_user: state.firebase.display_user
    }
}

const mapDispatchToProps = ({ followButtonClicked,getDisplayUserInformation })

export default connect( mapStateToProps,mapDispatchToProps)(ButtonContainer)