import React, {Component} from 'react';
import styles from "../styles/ExperienceStyles";
import {withStyles} from "@material-ui/core/styles";

class Experience extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Experience"} className={classes.root}>
                <h1>Experiences</h1>
            </div>
        );
    }
}

export default withStyles(styles)(Experience);