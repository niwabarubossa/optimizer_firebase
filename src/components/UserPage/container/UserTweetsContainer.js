import React, { Component } from 'react';
import ContentCard from '../../TopPage/ContentCard'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset } from '../../../actions'
import { connect } from 'react-redux'
// import classes from '../../assets/mainPage/ContentCardContainer.css'
import UserTweet from '../UserTweet'


class UserTweetsContainer extends Component {
    componentWillMount(){
        this.props.handleDrawerToggleReset()
    }
    componentDidMount(){
        this.props.getPosts()
    }
    render(){
        return(
            <div>
                { this.props.state_posts && this.props.state_posts.map(project => {
                    return (
                        <div key={project.tweet_id}>
                            <UserTweet props={project} />
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
export default connect(mapStateToProps, mapDispatchToProps)(UserTweetsContainer)
