import React, { Component } from 'react';
import MainContainer from './components/TopPage/MainContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TestComponent from './components/TopPage/TestComponent';
import AppBarMain from './components/appbar/AppBarMain'
import InNav from './components/appbar/InNav'
import ManagementPageMainContainer from "./components/ManagementPage/MainContainer";
import UserPage from './components/UserPage/UserPage'

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
  },
});

class App extends Component {

  render() {

    const { classes, theme } = this.props;
    return (
      <BrowserRouter>
            <div className="App" style={{textAlign: 'center',marginTop: '64px'}}>
              <div className={classes.root}>   
                <AppBarMain />
                <nav className={classes.drawer}>
                  <InNav />
                </nav>   

                <main className={classes.content} style={{textAlign: 'center'}}>
                  <Route exact path="/" component={MainContainer} />
                  <Route path="/:id" component={TestComponent} />
                  <Route path="/management" component={ManagementPageMainContainer} />
                  <Route path="/user/:id" component={UserPage} />
                </main>
              </div>
            </div>
      </BrowserRouter> 
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(App);