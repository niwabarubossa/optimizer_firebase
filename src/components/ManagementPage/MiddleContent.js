import React, { Component } from 'react';
// import classes from '../../assets/managementPage/MiddleContent.css'
import ChartContainer from './ChartContainer'
import ContentCardContainer from '../TopPage/ContentCardContainer'
import ContentCard from '../TopPage/ContentCard'
import { getMyPosts } from '../../actions'
import { connect } from 'react-redux'
import classes from '../../assets/mainPage/ContentCardContainer.css'

class MiddleContent extends Component {
    //今のままだと最初にこのページを見ないとuser tweets　が表示されない

    async componentDidUpdate(prevProps) {
        if(prevProps.current_user != this.props.current_user){
            await this.props.getMyPosts(this.props.current_user.uid)
        }
    }

    render(){
        return(
            <div className={classes.middleContentContainer}>
                <ChartContainer height={450} />

                <div className={classes.ContentCardContainer}>
                { this.props.my_posts && this.props.my_posts.map(project => {
                        return (
                            <div key={project.tweet_id}>
                                <ContentCard props={project} />
                            </div>
                        )
                    })} 
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = ({ getMyPosts })
const mapStateToProps = (state) => {
    return{
        my_posts: state.firebase.my_posts,
        current_user: state.firebase.current_user
    } 
}
export default connect(mapStateToProps, mapDispatchToProps)(MiddleContent)
