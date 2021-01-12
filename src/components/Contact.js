import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/ContactStyles";
import Typography from "@material-ui/core/Typography";
import {Container, IconButton} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Contact extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Contact"} className={classes.root}>
                <Typography className={classes.title} variant="h3" align={"center"} color={"primary"}>
                    Let's talk
                </Typography>
                <Container maxWidth={"md"} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div className={classes.card}>
                        <Typography color={"primary"} variant="h4" align={"center"} style={{marginBottom: "1rem"}}>
                            Thank you for dropping by!
                        </Typography>
                        <Typography color={"primary"} variant="h6" align={"center"}>
                            If you'd like to get in touch, feel free to drop me an email at <a style={{color:"inherit"}}href={"mailto:jamestanyuli@gmail.com"}>jamestanyuli@gmail.com</a>, or simply click on the icons below for my social media goodness :)
                        </Typography>
                        <div className={classes.icons}>
                            <IconButton aria-label="github" href={"https://github.com/iamjamestan"}>
                                <GitHubIcon color={"primary"} />
                            </IconButton>
                            <IconButton aria-label="linkedin" href={"https://www.linkedin.com/in/jamestanyuli/"}>
                                <LinkedInIcon color={"primary"} />
                            </IconButton>
                            <IconButton aria-label="instagram" href={"https://www.instagram.com/iamjamestan/"}>
                                <InstagramIcon color={"primary"} />
                            </IconButton>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);