import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import styles from "./styles/AppStyles";
import { ThemeProvider } from '@material-ui/styles';
import {withStyles, createMuiTheme} from "@material-ui/core/styles";
import About from "./components/About";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        },
        secondary: {
            main: '#03DAC6',
        },
    },
    typography: {
        fontFamily: "Poppins"
    }
});


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {isHero: true}
    }
    handleScroll = () => {
        var scrollMaxY =(document.documentElement.scrollHeight - document.documentElement.clientHeight - 64)
        if (window.scrollY > window.innerHeight * 0.1 && window.scrollY < scrollMaxY) {
            this.setState({isHero: false});
        } else {
            this.setState({isHero: true});
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        const {classes} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Navbar isHero={this.state.isHero}/>
                    <div className={classes.body}>
                        <Hero />
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
