import React, {Component} from 'react';
import Particles from "react-particles-js";
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/HeroStyles";
import {Grid, Typography} from "@material-ui/core";
import profilepic from "../images/profilepic.png"
import Button from "@material-ui/core/Button";
import {HashLink} from "react-router-hash-link";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class Hero extends Component {
    particlesConfig = {
        particles: {
            number: {
                value: 100,
            },
            size: {
                value: 3,
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div id={"Home"} className={classes.root}>
                <Grid container className={classes.rootGrid} justify={"center"} alignItems={"center"} >
                    <Grid item xs={"12"} md={"4"} className={classes.intro}>
                        <img className={classes.image} src={profilepic} alt={"profilepic"}/>
                    </Grid>
                    <Grid item xs={"12"} md={"4"} className={classes.intro}>
                        <Typography variant={"h4"} color={"Primary"} >
                            Hello, I'm James.
                        </Typography>
                        <Typography variant={"h6"} color={"Primary"} >
                            I'm a year 2 computer science student.
                        </Typography>
                        <HashLink smooth to={"/#Projects"}>
                            <Button variant="contained" color={"secondary"} className={classes.button} endIcon={<ArrowDownwardIcon fontSize={"large"}/>}>
                                View my work
                            </Button>
                        </HashLink>
                    </Grid>
                </Grid>
                <Particles className={classes.particles} params={this.particlesConfig}/>
            </div>
        );
    }
}

export default withStyles(styles)(Hero);