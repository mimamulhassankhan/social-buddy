import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Header from '../Header/Header';

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
      minHeight: 515,
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
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  });  

const SinglePost = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [userPost, setUserPost] = useState([]);

    useEffect( () => {
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUserPost(data))
        .catch(er => console.log(er));
    },[postId]);
    const {title, body} = userPost;

    return (
        <div>
            <Header/>
            <div className="d-flex justify-content-center m-3">
                <div>
                    <Card variant="outlined" className={classes.root}>
                    <CardMedia className={classes.media} image="http://4.bp.blogspot.com/-OnWGEQZr620/UNxFJUZyy0I/AAAAAAAAEOc/UEcm4-glnVo/s1600/ComputerDesktopWallpapersCollection527_058.jpg" title="Paella dish" />
                        <CardContent>
                            <Typography className={classes.title} variant="h5" component="h2"> {title} </Typography>
                            <Typography variant="body2" component="p"> {body} </Typography>
                        </CardContent>  
                    </Card>
                </div>
                <div>
                    <Comment postId={postId}/>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;