import React, {Component} from 'react';
import styles from "../styles/ExperienceStyles";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import experienceData from "../data/ExperienceData";

class Experience extends Component {

    renderExperiences(classes) {
        let evenExperience = false;
        return experienceData.map(e => e.type === "year"
            ?
            <Typography variant={"h4"} className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                {e.year}
            </Typography>
            :
            <div className={classes.timeLineItem} data-aos={evenExperience && window.innerWidth >= 600 ? "fade-left": "fade-right" }>
                <Typography variant={"h6"} align={"left"} className={classes.subHeading}>
                    {e.title}
                </Typography>
                <Typography variant={"body1"} align={"left"} color={"secondary"}>
                    {e.subHeading}
                </Typography>
                <ul className={classes.experienceDetails}>
                {
                    e.details.map(d =>
                        <li>
                            <Typography variant={"subtitle1"} align={"left"} style={{color: "tan", lineHeight:"1.2"}}>
                                {d}
                            </Typography>
                        </li>
                    )
                }
                </ul>
                {evenExperience = !evenExperience}
            </div>
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <div id={"Experience"} className={classes.root}>
                <Container>
                    <Typography className={classes.title} variant="h3" align={"center"} color={"primary"}>
                        Experience
                    </Typography>
                    <div className={classes.timeLine}>
                        {this.renderExperiences(classes)}
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Experience);