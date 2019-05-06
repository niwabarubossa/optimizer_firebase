import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

class FavIconContainer extends Component {
    render(){
        console.log('children rendering..')
        return(
            <div onClick={this.props.goodButtonClicked}>
                {this.props.local_like_state ?
                    <IconButton aria-label="Add to favorites"
                        color="secondary"
                        onClick={this.goodButtonClicked}>
                        <FavoriteIcon />
                    </IconButton>
                    :
                    <IconButton aria-label="Add to favorites"
                        color="primary"
                        onClick={this.goodButtonClicked}>
                        <FavoriteIcon />
                    </IconButton>}
            </div>
        )
    }
}

export default FavIconContainer;
