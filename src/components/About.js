import React, {Component} from 'react';
import styles from "../styles/AboutStyles";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Box, Container, Divider, Grid} from "@material-ui/core";
import profilepic from "../images/profilepic.png";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import courseWork from "../data/CourseWork";
import skills from "../data/Skills"

class About extends Component {

    renderMods(classes) {
        return courseWork.map(m =>
            <AccordionDetails className={classes.accordionDetails}>
                <Typography variant={"body2"} style={{width:"70%"}}>
                    {m.module}
                </Typography>
                <Typography>
                    {m.grade}
                </Typography>
            </AccordionDetails>
        );
    }

    renderSkills(classes) {
        return Object.entries(skills).map(e =>
            <Grid item xs={12} className={classes.skillBlock}>
                <Box classname={classes.box} width={1} height="100%" style={{backgroundColor: "white", borderRadius: '20px'}}>
                    <Box width="18%" className={classes.category} height="100%" style={{backgroundColor: "#03DAC6", borderRadius: '20px 0px 0px 20px'}}>
                        {e[0]}
                    </Box>
                    <div className={classes.logos}>
                        {e[1].map(s => <span>{s}</span>)}
                    </div>
                </Box>
            </Grid>
        )
    }

    render() {
        const {classes} = this.props;
        return (
            <div id={"About"} className={classes.root}>
                <Typography className={classes.title} variant="h3" align={"center"}>
                    About Me
                </Typography>
                <Container>
                    <Grid container className={classes.container} justify={"center"} spacing={5}>
                        <Grid item xs={12} md={5} >
                            <div className={classes.profile}>
                                <img className={classes.image} src={profilepic} alt={"profilepic"}/>
                                <Typography variant="h4" align={"center"} style={{marginBottom: "1rem", marginTop: "1rem"}}>
                                    Tan Yu Li, James
                                </Typography>
                                <Typography variant="h5" align={"center"}>
                                    Year 2 Computer Science, NUS
                                </Typography>
                                <Typography variant="h6" align={"center"}>
                                    NUS Merit Scholar
                                </Typography>
                                <Typography variant="body1" align={"center"} style={{marginTop: "1rem", marginBottom: "0.4rem"}}>
                                    CAP: 4.75/5.00
                                </Typography>
                                <Accordion className={classes.accordion} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography variant="body1" align={"center"} >Coursework</Typography>
                                    </AccordionSummary>
                                    {this.renderMods(classes)}
                                </Accordion>
                            </div>
                        </Grid>
                        <Grid item container xs={12} md={6} className={classes.skills}>
                            <Typography variant="h4" align={"center"} style={{marginBottom: "1rem", marginTop: "1rem"}}>
                                Skills
                            </Typography>
                            {this.renderSkills(classes)}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(About);