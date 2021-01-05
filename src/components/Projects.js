import React, {Component} from 'react';
import styles from "../styles/ProjectsStyles";
import {withStyles} from "@material-ui/core/styles";

class Projects extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Projects"} className={classes.root}>
                <h1>PROJECTS</h1>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);