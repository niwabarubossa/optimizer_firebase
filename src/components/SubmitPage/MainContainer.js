import React, { Component } from 'react';
import {Grid} from "@material-ui/core"
import css from '../../assets/submitPage/MainContainer.css'
import SubmitForm from './SubmitForm'

class MainContainer extends Component {
    render(){
        return(
            <Grid container>
                <Grid item xs={0} md={2} lg={3}>

                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <div className={css.mainContainer}>
                        <SubmitForm />
                    </div>
                </Grid>
                <Grid item xs={0} md={2} lg={3}>

                </Grid>

            </Grid>
        )
    }
}

export default MainContainer;
