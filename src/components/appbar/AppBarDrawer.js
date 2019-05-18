import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});
class AppBarDrawer extends Component {

    render(){
        const { classes, theme } = this.props;
        return(
            <div>
              <div className={classes.toolbar} />
              <Divider />
                <List>
                      <Link to={'/'} style={{textDecoration : 'none',color: 'white' }} >
                          <ListItem button key={'aaa'}>
                          <ListItemIcon> <InboxIcon /> </ListItemIcon>
                          <ListItemText primary={'トップページ'} />
                          </ListItem>
                      </Link>
                      <Link to={'/management'} style={{textDecoration : 'none',color: 'white' }} >
                          <ListItem button key={'aaa'}>
                          <ListItemIcon> <InboxIcon /> </ListItemIcon>
                          <ListItemText primary={'管理画面へ'} />
                          </ListItem>
                      </Link>
                      <Link to={'/login'} style={{textDecoration : 'none',color: 'white' }} >
                          <ListItem button key={'aaa'}>
                          <ListItemIcon> <InboxIcon /> </ListItemIcon>
                          <ListItemText primary={'ログイン'} />
                          </ListItem>
                      </Link>
                </List>
              <Divider />
              <List>
                {['目標１', '目標２', '目標３'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          );
    }
}

export default withStyles(styles, { withTheme: true })(AppBarDrawer);