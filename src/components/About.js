import React, {Component} from 'react';
import styles from "../styles/AboutStyles";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Divider, Grid} from "@material-ui/core";

class About extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"About"} className={classes.root}>
                <Typography className={classes.title} variant="h3" align={"center"}>
                    About Me
                </Typography>
                <Grid container className={classes.container} justify={"center"} spacing={2}>
                    <Grid item xs={12} md={4} className={classes.profile}>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.pane}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(About);