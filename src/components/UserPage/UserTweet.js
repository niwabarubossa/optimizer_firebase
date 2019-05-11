import React,{ Component } from 'react'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import css from '../../assets/userPage/UserTweet.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Comment from '@material-ui/icons/Comment';
import Autorenew from '@material-ui/icons/Autorenew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
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
  },
  card: {
    height: 'auto'
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
});

class UserTweet extends Component {
    render(){
        const { classes } = this.props;
        return(
          <div className={css.cardContainer} >

          <Link to={`user/${this.props.props.author_id}`} >
            <ListItem className={classes.card}>
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
            </Link>
            <div className={css.contentContainer}>
              {this.props.props.author_id}
              {this.props.props.title}
              {this.props.props.body}
              <img className={css.tweetImage} src={this.props.props.image_url} ></img>
              something...
            </div>

            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <Comment />
              </IconButton>
            </CardActions>

            <Divider />
          </div>
        )
    }
}

export default withStyles(styles)(UserTweet);