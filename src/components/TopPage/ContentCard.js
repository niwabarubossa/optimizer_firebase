import React,{ Component } from 'react'
import { goodButtonClicked } from '../../actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FavIconContainer from './FavIcon'
import { firestore } from '../../plugins/firebase'
import css from '../../assets/mainPage/ContentCard.css';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Comment from '@material-ui/icons/Comment';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
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

class ContentCard extends Component {

      constructor(props) {
        super(props);
        this.state = {
          local_state_like: null
        }
      }

    async componentWillMount(){
      // var aiueo = null
      // await firestore.collection('tweets').doc(this.props.props.id).collection('liker').doc(this.props.current_user.uid).get().then(function(doc) {
      //     if (doc.exists) {
      //       aiueo = true
      //     } else {
      //       aiueo = false
      //     }
      // }).catch(function(error) {
      //         console.log("Error getting document:", error);
      // });
      // this.setState({ local_state_like: aiueo})
    }

    async goodButtonClicked(){
      await this.props.goodButtonClicked(this.props.current_user,this.props.props.id)
      var aiueo = null
      await firestore.collection('tweets').doc(this.props.props.id).collection('liker').doc(this.props.current_user.uid).get().then(function(doc) {
          if (doc.exists) {
            aiueo = true
          } else {
            aiueo = false
          }
      }).catch(function(error) {
              console.log("Error getting document:", error);
      });
      this.setState({ local_state_like: aiueo})
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
              {/* <img className={css.tweetImage} src={this.props.props.image_url} ></img> */}
            </div>

            {/* <CardActions className={classes.actions} disableActionSpacing>

            <FavIconContainer 
              local_like_state = {this.state.local_state_like}
              goodButtonClicked={() => this.goodButtonClicked()} />
              
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <Comment />
              </IconButton>
            </CardActions> */}

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
const mapDispatchToProps = ({ goodButtonClicked })
export default compose(
  withStyles(styles,{ withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(ContentCard)