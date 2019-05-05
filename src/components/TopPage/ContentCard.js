import React,{ Component } from 'react'
import { goodButtonClicked, combineGoodDataToTweet } from '../../actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FavIconContainer from './FavIcon'
import { firestore } from '../../plugins/firebase'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import css from '../../assets/mainPage/ContentCard.css';
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
  uwaa: {
    color: 'colorPrimary',
    backgroundColor: 'primary'
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


class ContentCard extends Component {

    async componentWillMount(){
      // await this.props.combineGoodDataToTweet( this.props.props, this.props.current_user)
      // console.log(this.props.props)
      // console.log(this.props.props.like)
      await firestore.collection('tweets').doc(this.props.props.id).collection('liker').doc(this.props.current_user.uid).get().then(function(doc) {
        if (doc.exists) {
          console.log('like exist')
        } else {
          console.log('like does not exist')
        }
    }).catch(function(error) {
            console.log("Error getting document:", error);
    });
    }


    async goodButtonClicked(){
      // await this.props.goodButtonClicked(this.props.current_user,this.props.props.id)
      // await this.props.combineGoodDataToTweet( this.props.props, this.props.current_user)
      // console.log(this.props.props)
      // console.log(this.props.props.like)
    }
    render(){
        const { classes } = this.props;
        return(
          <div className={css.cardContainer} >
          <h1>{this.aiueo}</h1>
          <Link to={`user/${this.props.props.author_id}`} >
            <ListItem className={classes.card}>
                    <ListItemAvatar>
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
              {this.props.props.id}
              {this.props.props.author_id}
              {this.props.props.title}
              {this.props.props.body}
              <img className={css.tweetImage} src={this.props.props.image_url} ></img>
              something...
            </div>

            <CardActions className={classes.actions} disableActionSpacing>

            <FavIconContainer like={this.props.props.like} />
                <IconButton aria-label="Add to favorites" className={classes.uwaa}
                  color="secondary"
                  onClick={this.goodButtonClicked.bind(this)}>
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="Add to favorites" className={classes.uwaa}
                  color="primary"
                  onClick={this.goodButtonClicked.bind(this)}>
                  <FavoriteIcon />
                </IconButton> */}
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

const mapStateToProps = (state) => {    
  return { 
    current_user: state.firebase.current_user,
  }
}
const mapDispatchToProps = ({ goodButtonClicked, combineGoodDataToTweet })

export default compose(
  withStyles(styles,{ withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(ContentCard)