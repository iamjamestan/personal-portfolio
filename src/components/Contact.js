import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/ContactStyles";

class Contact extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Contact"} className={classes.root}>
                <h1>Contact</h1>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);