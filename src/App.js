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
import LoginPageMainContainer from './components/LoginPage/MainContainer'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentsContainer from './components/TopPage/ContentsContainer'
import SubmitPage from './components/SubmitPage/MainContainer'
import { Link } from 'react-router-dom'

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
  constructor() {
      super();
      this.state = {
        showPopup: false
      };
  }
  togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
  }

  render() {

    const AddBtnStyle={
      position: "fixed",
      right: 12,
      bottom: 12,
      zIndex: 10
    }

    const { classes, theme } = this.props;
    return (
      <BrowserRouter>
          { this.state.showPopup ?
                    <ContentsContainer />             
                    :
                    null
                  }
            <div className="App" style={{textAlign: 'center',marginTop: '64px',boxSizing: 'border-box'}}>

              <div className={classes.root}>   
                <AppBarMain />
                <nav className={classes.drawer}>
                  <InNav />
                </nav>   

                <main className={classes.content} style={{textAlign: 'center'}}>
                  <Route exact path="/" component={MainContainer} />
                  {/* <Route path="/:id" component={TestComponent} /> */}
                  <Route path="/management" component={ManagementPageMainContainer} />
                  <Route path="/user/:id" component={UserPage} />
                  <Route path="/login" component={LoginPageMainContainer} />
                  <Route path="/submit" component={SubmitPage} />
                </main>
              </div>

              {/* <FloatingActionButton style={AddBtnStyle} onClick={this.togglePopup.bind(this)}> */}

              <Link to={'/submit'} style={{textDecoration : 'none',color: 'white' }} >
                <FloatingActionButton style={AddBtnStyle} >
                  <ContentAdd />
                </FloatingActionButton>
              </Link>
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