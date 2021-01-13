import React, {Component} from 'react';
import styles from "../styles/ProjectsStyles";
import {withStyles} from "@material-ui/core/styles";
import {Chip, Container, Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch';
import projectsData from '../data/ProjectsData';

class Projects extends Component {

    renderCards(classes) {
        return projectsData.map(project => (
            <Grid item className={classes.cardDiv} xs={12} sm={6} lg={4} >
                <Card className={classes.card} >
                    <CardMedia
                        className={classes.cardMedia}
                        image={project.imageLink}
                        title={project.title}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align={"justify"}>
                            {project.description}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        {
                            Object.entries(project.links).map(l =>
                                <Button className={classes.button} size="small" variant="outlined" color="black" href={l[1]} target={"_blank"} endIcon={<LaunchIcon/>}>
                                    {l[0]}
                                </Button>
                            )
                        }
                    </CardActions>
                    <CardActions className={classes.cardActions}>
                        {project.skills.map(skill => <Chip label={skill} className={classes.chip} variant="outlined" color={"secondary"}/>)}
                    </CardActions>
                </Card>
            </Grid>
        ));
    }

    render() {
        const {classes} = this.props;
        return (
            <div id={"Projects"} className={classes.root} >
                <Container>
                    <Typography className={classes.title} variant="h3" align={"center"}>
                        Projects
                    </Typography>
                    <Grid container className={classes.rootGrid} justify={"flex-start"} alignItems={"flex-start"} spacing={2}>
                        {this.renderCards(classes)}
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);