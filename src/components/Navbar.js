import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../styles/NavbarStyles';
import { HashLink } from 'react-router-hash-link';

class Navbar extends Component {

    render() {
        const {isHero, classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" color={isHero ? "transparent" : "primary"}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h5">
                            <HashLink smooth to="#">jamestanyuli</HashLink>
                        </Typography>
                        <div className={classes.middle}>
                            <Typography variant="subtitle1">
                                <HashLink smooth to="#Projects">Projects</HashLink>
                            </Typography>
                            <Typography variant="subtitle1">
                                <HashLink smooth to="#Experience">Experience</HashLink>
                            </Typography>
                            <Typography variant="subtitle1">
                                <HashLink smooth to="#Skills">Skills</HashLink>
                            </Typography>
                        </div>
                            <HashLink smooth to={"#Contact"}>
                                <Button variant="outlined" color={isHero ? "secondary" : "inherit"}>
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