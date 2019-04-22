import React, { Component } from 'react';
import css from '../../assets/mainPage/TrendContainer.css'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';


const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit,
    },
    trend_chip: {
        margin: theme.spacing.unit,
        backgroundColor: '#00b7ce'
    }
  });

class TrendContainer extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className={css.trendContainer}>

                <Chip
                    icon={<FaceIcon />}
                    label="時間術"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="英語"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="瞑想"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="仕事術"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="試験勉強"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="英語"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="瞑想"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="仕事術"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    icon={<FaceIcon />}
                    label="試験勉強"
                    clickable
                    className={classes.trend_chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                />
            </div>
        )
    }
}

export default withStyles(styles)(TrendContainer);