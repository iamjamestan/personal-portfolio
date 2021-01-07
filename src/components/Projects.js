import React, {Component} from 'react';
import styles from "../styles/ProjectsStyles";
import {withStyles} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Projects extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Projects"} className={classes.root} >
                <Container>
                    <Typography className={classes.title} variant="h3" align={"center"}>
                        Projects
                    </Typography>
                    <Grid container className={classes.rootGrid} justify={"center"} alignItems={"flex-start"} spacing={2}>
                        <Grid item className={classes.cardDiv} xs={4} >
                            <Card className={classes.card} >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align={"justify"}>
                                            Lizards are a widespread group of aquamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="black">
                                        Github
                                    </Button>
                                    <Button size="small" color="black">
                                        Documentation
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item className={classes.cardDiv} xs={4} >
                            <Card className={classes.card} >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align={"justify"}>
                                            Lizards are a widespread group of aquamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="black">
                                        Share
                                    </Button>
                                    <Button size="small" color="black">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        <Grid item className={classes.cardDiv} xs={4} >

                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);