import React, { Component } from 'react';
import AppBarDrawer from './AppBarDrawer'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { handleDrawerToggle } from '../../actions'

const drawerWidth = 240;
const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
  },
});

class InNav extends Component {

    render(){
        const { classes, theme } = this.props;

        return(
            <React.Fragment>
                <Hidden smUp implementation="css">
                    <Drawer
                    container={this.props.container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={this.props.redux_mobileOpen}
                    onClose={this.props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    >
                    <AppBarDrawer />
                    </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                    <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                    >
                    <AppBarDrawer />
                    </Drawer>
                </Hidden>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = ({ handleDrawerToggle })
const mapStateToProps = (state) => {    

  return { redux_mobileOpen: state.firebase.mobileOpen }
}

export default compose(
  withStyles(styles,{ withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(InNav)