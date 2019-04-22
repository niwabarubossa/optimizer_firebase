import React, { Component } from 'react';
import TestComponentChild from './TestComponentChild'
import { getPostsRequest, getPostsSuccess, getPosts ,getSelectedPosts } from '../../actions'
import { connect } from 'react-redux'
import classes from '../../assets/TestComponent.css'

class TestComponent extends Component {
    
    componentWillMount(){
        this.props.getSelectedPosts(Number(this.props.match.params.id))
    }
    render(){
        return(
            <div className={classes.testComponent}>
                <TestComponentChild props={this.props} />
            </div>
        )
    }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts,getSelectedPosts })
const mapStateToProps = (state) => {    
    const currentState = state.firebase.items
    return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)