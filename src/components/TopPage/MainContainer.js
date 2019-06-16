import React, { Component } from 'react';
import classes from  '../../assets/mainPage/MainContainer.css'
import ContentCardContainer from './ContentCardContainer'
import { connect } from 'react-redux'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset } from '../../actions'
import RightContainer from './RightContainer'
import {Grid} from "@material-ui/core"

class MainContainer extends Component {
    // componentWillMount(){
        // this.props.handleDrawerToggleReset()
    // }
    componentDidMount(){
        this.props.handleDrawerToggleReset()
        this.props.getPosts()
    }
    render(){
        return(
            <div className={classes.mainContainer}>
                <Grid container spacing={16} >
                    <Grid item xs={12} md={7}>
                        <div className={classes.contentCardContainer}>
                            <ContentCardContainer />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <RightContainer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset })
const mapStateToProps = (state) => {    
    const currentState = state.firebase.items
    return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
