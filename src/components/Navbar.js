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
        this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
        this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    }

    handleMobileMenuOpen(e) {
        this.setState({mobileMoreAnchorEl: e.target});
    }
    handleMobileMenuClose() {
        this.setState({mobileMoreAnchorEl: null});
    }

    render() {
        const mobileMenuId = 'primary-search-account-menu-mobile';
        const {mobileMoreAnchorEl} = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const {isHero, classes} = this.props;
        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
                className={classes.menu}
            >
                <HashLink to="#About">
                    <MenuItem >
                        About
                    </MenuItem>
                </HashLink>
                <HashLink to="#Experience">
                    <MenuItem >
                        Experience
                    </MenuItem>
                </HashLink>
                <HashLink to="#Projects">
                    <MenuItem >
                        Projects
                    </MenuItem>
                </HashLink>
                <HashLink to="#Contact">
                    <MenuItem >
                        Contact
                    </MenuItem>
                </HashLink>
            </Menu>
        );
        return (
            <div className={classes.root}>
                <AppBar position="fixed" color={isHero ? "transparent" : "primary"}>
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
                        <div className={classes.mobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                onClick={this.handleMobileMenuOpen}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);