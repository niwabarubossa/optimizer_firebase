import React, { Component } from 'react';
import css from '../../assets/mainPage/RankingContainer.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    icon: {
        width: '40px',
        height: '40px'
    }
  });

class RankingContainer extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className={css.rankingContainer}>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        {/* <Avatar alt="Remy Sharp" src="../../assets/images/" /> */}
                        <FaceIcon className={classes.icon} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    
                    <Divider />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <FaceIcon className={classes.icon} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    
                    <Divider />

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <FaceIcon className={classes.icon} />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    </List>
            </div>
        )
    }
}

export default withStyles(styles)(RankingContainer);