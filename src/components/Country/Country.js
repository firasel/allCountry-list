import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,flag}=props.country
    
    const useStyles = makeStyles({
        media: {
          height: 140,
        },
      });
    const classes = useStyles();

    return (
        <Grid item xs={11} sm={9} md={4} lg={3}>
            <Card style={{width:'100%'}}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={`${flag}`}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{textDecoration:'none'}} to={`/country/${name}`}>
                        <Button size="small" color="primary">Show Details</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Country;