import React, { Component } from 'react';
import ContentCard from './ContentCard'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset } from '../../actions'
import { connect } from 'react-redux'
import classes from '../../assets/mainPage/ContentCardContainer.css'

class ContentCardContainer extends Component {
    // componentWillMount(){
    //     this.props.handleDrawerToggleReset()
    // }
    render(){
        return(
            <div className={classes.ContentCardContainer}>
                { this.props.state_posts && this.props.state_posts.map(project => {
                    return (
                        <div key={project.tweet_id}>
                            <ContentCard props={project} />
                        </div>
                    )
                })}  
            </div>
        )
    }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset })
const mapStateToProps = (state) => {    
    const currentState = state.firebase.items
    return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentCardContainer)
