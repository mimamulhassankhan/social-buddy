import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(er => console.log(er));
    },[]);
    return (
        <div>
            <Header/>
            <h3 className="m-auto">Recent Posts:</h3>
            <div className="d-flex flex-wrap justify-content-center align-self-left">
                {
                    posts.map(pst => <Post key={pst.id} data={pst}></Post>)
                }
            </div>
        </div>
    );
};

export default Home;