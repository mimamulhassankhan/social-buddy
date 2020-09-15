import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 850,
      minHeight: 200,
      maxHeight: 250,
      margin: 20,
      backgroundColor: 'lightgray',
      boxShadow: '5px 5px 15px lightgray',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 10
    },
    pos: {
      marginBottom: 12,
    },
    btnStyle:{
        backgroundColor: 'darkgray'
    }
  });  

const Post = ({data}) => {
    const classes = useStyles();
    const {title, body, id} = data;
    return (
        <div>
            <Card variant="outlined" className={classes.root}>
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2" gutterBottom> Post No: {id} </Typography>
                <Typography className={classes.title} variant="h5" component="h2"> {title} </Typography>
                <Typography variant="body2" component="p"> {body} </Typography>
            </CardContent>
            <div className="d-flex justify-content-end align-items-center p-3">
                <div>
                    <p className="text-danger mr-3">5 Comments</p>
                </div>
                <div>
                    <CardActions className={classes.pos}>
                        <Link to={`/post/${id}`}>
                            <Button className={classes.btnStyle} size="small">Learn More</Button>
                        </Link>
                    </CardActions>
                </div>
            </div>
            
            </Card>
        </div>
    );
};

export default Post;