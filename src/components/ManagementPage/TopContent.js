import React, { Component } from 'react';
import ColorBox from './ColorBox'
import classes from '../../assets/managementPage/TopContent.css'
import {Grid} from "@material-ui/core"

class TopContent extends Component {
    render(){
        return(
            <div className={classes.topContentContainer}>
                <Grid container>
                    <Grid item xs={6} lg={3}>
                        <ColorBox style={{backgroundColor: '#1fa8d8'}} />
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <ColorBox style={{backgroundColor: '#63c2de'}} />
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <ColorBox style={{backgroundColor: '#FEC24D'}} />
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <ColorBox style={{backgroundColor: '#f86c6b'}} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default TopContent;
