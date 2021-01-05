import React, {Component} from 'react';
import Particles from "react-particles-js";

class Hero extends Component {
    render() {
        return (
            <Particles id="particles-js"
               params={{
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
               }}
            />
        );
    }
}

export default Hero;