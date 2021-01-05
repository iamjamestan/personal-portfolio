import React, {Component} from 'react';
import styles from "../styles/SkillsStyles";
import {withStyles} from "@material-ui/core/styles";

class Skills extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Skills"} className={classes.root}>
                <h1>Skills</h1>
            </div>
        );
    }
}

export default withStyles(styles)(Skills);