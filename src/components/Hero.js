import React, {Component} from 'react';
import Particles from "react-particles-js";
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/HeroStyles";

class Hero extends Component {
    particlesConfig = {
        particles: {
            number: {
                value: 50,
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
            <div id={"#Home"}>
                <Particles className={classes.particles} params={this.particlesConfig}/>
            </div>
        );
    }
}

export default withStyles(styles)(Hero);