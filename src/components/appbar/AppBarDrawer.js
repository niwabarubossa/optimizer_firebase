import React, { Component } from 'react';
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { getUserInformation,firebaseLogout,handleDrawerToggleReset } from '../../actions'
import { connect } from 'react-redux'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});
class AppBarDrawer extends Component {

    logoutClicked(){
      this.props.firebaseLogout()
      this.props.handleDrawerToggleReset()
    }

    render(){
        const { classes, theme } = this.props;
        return(
            <div>
              <div className={classes.toolbar} />
              <Divider />
                <List>
                      <Link to={'/'} style={{textDecoration : 'none',color: 'white' }}  onClick={ () => this.props.handleDrawerToggleReset()}>
                          <ListItem button key={'aaa'}>
                          <ListItemIcon> <InboxIcon /> </ListItemIcon>
                          <ListItemText primary={'トップページ'} />
                          </ListItem>
                      </Link>

                      {
                        this.props.current_user ?
                        <React.Fragment>
                          <Link to={'/management'} style={{textDecoration : 'none',color: 'white' }} onClick={ () => this.props.handleDrawerToggleReset()} >
                              <ListItem button key={'aaa'}>
                              <ListItemIcon> <InboxIcon /> </ListItemIcon>
                              <ListItemText primary={'管理画面へ'} />
                              </ListItem>
                          </Link>
                          <Link to={'/submit'} style={{textDecoration : 'none',color: 'white' }}  onClick={ () => this.props.handleDrawerToggleReset()} >
                            <ListItem button key={'submitButton'}>
                              <ListItemIcon> <InboxIcon /> </ListItemIcon>
                              <ListItemText primary={'記録する'} />
                            </ListItem>
                          </Link>

                          <Divider />

                          
                          <Link to={'/logout'} style={{textDecoration : 'none',color: 'white' }}  onClick={ () => this.props.handleDrawerToggleReset()} >
                            <ListItem button key={'logout_button'} onClick={this.logoutClicked.bind(this)}>
                              <ListItemIcon> <InboxIcon /> </ListItemIcon>
                              <ListItemText primary={'ログアウト'} />
                            </ListItem>
                          </Link>
                        </React.Fragment>
                        :
                        <Link to={'/login'} style={{textDecoration : 'none',color: 'white' }} onClick={ () => this.props.handleDrawerToggleReset()} >
                            <ListItem button key={'aaa'}>
                            <ListItemIcon> <InboxIcon /> </ListItemIcon>
                            <ListItemText primary={'ログイン'} />
                            </ListItem>
                        </Link>
                      }

                </List>
              {/* <List>
                {['目標１', '目標２', '目標３'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List> */}
            </div>
          );
    }
}


const mapStateToProps = (state) => {    
  return { 
	  current_user: state.firebase.current_user
  }
}

const mapDispatchToProps = ({ getUserInformation,firebaseLogout,handleDrawerToggleReset})

export default compose(
  withStyles(styles,{ withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(AppBarDrawer)