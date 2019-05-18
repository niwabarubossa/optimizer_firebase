import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { handleDrawerToggle, firebaseLogin, loginStatus, loginWithTwitter, getCurrentState, getUserInformation, getUserInformationSuccess } from '../../actions'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
});

class AppBarMain extends Component {

    componentWillMount(){
      this.props.getUserInformation()
    }

    render(){
        const { classes, theme } = this.props;
        return(
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      // onClick={this.handleDrawerToggle}
                      onClick={this.props.handleDrawerToggle}
                      className={classes.menuButton}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link to={'/'} style={{textDecoration : 'none',color: 'white' }}>Opty</Link>
                    </Typography>
                  </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

AppBarMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapDispatchToProps = ({ handleDrawerToggle,
                              firebaseLogin,
                              loginStatus, 
                              loginWithTwitter, 
                              getCurrentState, 
                              getUserInformation, 
                              getUserInformationSuccess })
const mapStateToProps = (state) => {    
  return { 
    redux_mobileOpen: state.firebase.mobileOpen,
    current_user: state.firebase.current_user
  }
}

export default compose(
  withStyles(styles,{ withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(AppBarMain)