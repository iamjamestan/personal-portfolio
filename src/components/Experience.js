import React, {Component} from 'react';
import styles from "../styles/ExperienceStyles";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";

class Experience extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Experience"} className={classes.root}>
                <Container>
                    <Typography className={classes.title} variant="h3" align={"center"} color={"primary"}>
                        Experience
                    </Typography>
                    <div className={classes.timeLine}>
                        <Typography variant={"h4"} className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2021
                        </Typography>
                        <div className={classes.timeLineItem}>
                            <Typography variant={"h6"} align={"left"} className={classes.subHeading}>
                                Teaching Assistant
                            </Typography>
                            <Typography variant={"body1"} align={"left"} color={"secondary"}>
                                company name where worked
                            </Typography>
                            <Typography variant={"subtitle1"} align={"left"} style={{color: "tan"}}>
                                I taught asynchronous programming, blah blah blah blah blah blah blah blah blah blah blah
                            </Typography>
                        </div>
                        <Typography variant={"h4"} className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2020
                        </Typography>
                        <div className={classes.timeLineItem}>
                            <Typography variant={"h6"} align={"left"} className={classes.subHeading}>
                                Teaching Assistant
                            </Typography>
                            <Typography variant={"body1"} align={"left"} color={"secondary"}>
                                company name where worked
                            </Typography>
                            <Typography variant={"subtitle1"} align={"left"} style={{color: "tan"}}>
                                I taught asynchronous programming, blah blah blah blah blah blah blah blah blah blah blah
                            </Typography>
                        </div>
                        <Typography variant={"h4"} className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2019
                        </Typography>
                        <div className={classes.timeLineItem}>
                            <Typography variant={"h6"} align={"left"} className={classes.subHeading}>
                                Teaching Assistant
                            </Typography>
                            <Typography variant={"body1"} align={"left"} color={"secondary"}>
                                company name where worked
                            </Typography>
                            <Typography variant={"subtitle1"} align={"left"} style={{color: "tan"}}>
                                I taught asynchronous programming, blah blah blah blah blah blah blah blah blah blah blah
                            </Typography>
                        </div>
                        <Typography variant={"h4"} className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2018
                        </Typography>
                        <div className={classes.timeLineItem}>
                            <Typography variant={"h6"} align={"left"} className={classes.subHeading}>
                                Teaching Assistant
                            </Typography>
                            <Typography variant={"body1"} align={"left"} color={"secondary"}>
                                company name where worked
                            </Typography>
                            <Typography variant={"subtitle1"} align={"left"} style={{color: "tan"}}>
                                I taught asynchronous programming, blah blah blah blah blah blah blah blah blah blah blah
                            </Typography>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Experience);