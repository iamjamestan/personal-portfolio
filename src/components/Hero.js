import React, {Component} from 'react';
import Particles from "react-particles-js";
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/HeroStyles";
import {Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {HashLink} from "react-router-hash-link";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typed from "react-typed"

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
            detect_on:"window",
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
                    <Grid item xs={"12"} md={"6"} className={classes.intro}>
                        <Typography variant={"h3"} color={"Primary"}>
                            Hello, I'm James
                        </Typography>
                        <Typography variant={"h5"} color={"Primary"} style={{marginTop: "1rem"}}>
                            and I'm <Typed strings={["a computer science student", "a software engineer", "an educator", "a scholar"]} typeSpeed={40} backSpeed={45} loop/>
                        </Typography>
                        <HashLink smooth to={"/#About"}>
                            <Button variant="contained" color={"secondary"} className={classes.button} endIcon={<ArrowDownwardIcon fontSize={"large"}/>}>
                                View More
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