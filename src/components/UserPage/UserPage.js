import React, { Component } from 'react';
import { getDisplayUserInformation } from '../../actions'
import { connect } from 'react-redux'
import UserPageChild from './UserPageChild'
import UserProfileContainer from './container/UserProfileContainer'
import ContentCardContainer from '../TopPage/ContentCardContainer'
import UserTweetsContainer from './container/UserTweetsContainer'
import {Grid} from "@material-ui/core"

class UserPage extends Component {

    componentDidMount(){
        this.props.getDisplayUserInformation(this.props.match.params.id)
    }

    render(){
        return(
            <div style={{color: 'black',display: 'flex',justifyContent: 'center',flexDirection: 'column'}}>
                <UserProfileContainer props={this.props} />
                <Grid container spacing={16} >
                    <Grid item xs={12} md={7}>
                        <UserTweetsContainer />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state) => {    
  return { 
    display_user_uid: state.firebase.display_user_uid
  }
}

const mapDispatchToProps = ({ getDisplayUserInformation })

export default connect(mapStateToProps,mapDispatchToProps)(UserPage)