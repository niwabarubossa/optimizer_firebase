import React, { Component } from 'react';
import ContentCard from '../../TopPage/ContentCard'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset,getDisplayUserTweets } from '../../../actions'
import { connect } from 'react-redux'
// import classes from '../../assets/mainPage/ContentCardContainer.css'
import UserTweet from '../UserTweet'


class UserTweetsContainer extends Component {
    componentWillMount(){
        this.props.handleDrawerToggleReset()
    }
    async componentDidMount(){
        // this.props.getPosts()
        await this.props.getDisplayUserTweets(this.props.id)
    }

    render(){
        return(
            <div>
                {/* { this.props.state_posts && this.props.state_posts.map(project => { */}
                    { this.props.display_user_tweets && this.props.display_user_tweets.map(project => {
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

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset,getDisplayUserTweets })
const mapStateToProps = (state) => {    
    const currentState = state.firebase.items
    return { state_posts: currentState,
            display_user_tweets: state.firebase.display_user_tweets
         }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserTweetsContainer)