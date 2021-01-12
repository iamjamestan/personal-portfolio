import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/ContactStyles";
import Typography from "@material-ui/core/Typography";

class Contact extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Contact"} className={classes.root}>
                <Typography className={classes.title} variant="h3" align={"center"} color={"primary"}>
                    Let's talk
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);