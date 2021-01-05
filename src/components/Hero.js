import React, {Component} from 'react';
import Particles from "react-particles-js";

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
        return (
            <Particles id="particles-js" params={this.particlesConfig}/>
        );
    }
}

export default Hero;