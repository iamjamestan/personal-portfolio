import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../styles/NavbarStyles';
import { HashLink } from 'react-router-hash-link';
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {mobileMoreAnchorEl:null};
    }

    render() {
        const {isHero, classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="fixed" color={isHero ? "transparent" : "primary"}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h5">
                            <HashLink smooth to="#">jamestanyuli</HashLink>
                        </Typography>
                        <div className={`${classes.middle} ${classes.desktop}`}>
                            <Typography variant="h6">
                                <HashLink smooth to="#About">About</HashLink>
                            </Typography>
                            <Typography variant="h6">
                                <HashLink smooth to="#Experience">Experience</HashLink>
                            </Typography>
                            <Typography variant="h6">
                                <HashLink smooth to="#Projects">Projects</HashLink>
                            </Typography>
                        </div>
                        <HashLink smooth to={"#Contact"} className={classes.desktop}>
                            <Button variant="outlined" size={"large"} color={isHero ? "secondary" : "inherit"}>
                                contact
                            </Button>
                        </HashLink>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);