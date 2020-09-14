import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => setUsers(data.results))
        .catch(er => console.log(er));
    },[]);

    useEffect( () => {
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(er => console.log(er));
    },[postId]);
    
    const obh = users.shift();
    console.log(obh['gender'])
    return (
        <div>
            {

            }
        </div>
    );
};

export default SinglePost;