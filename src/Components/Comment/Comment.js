import React, { useEffect, useState } from 'react';
import UserModel from '../../UserModel/UserModel';

const Comment = ({postId}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(er => console.log(er));
    },[postId])
    return (
        <div className="pl-1" style={{borderRight:'1px solid lightgray', borderTop:'1px solid lightgray', borderRadius: 5}}>
            <h5>Comments: </h5>
            {
                comments.map(cmnt => <UserModel data={cmnt} key={cmnt.id}></UserModel>)
            }
        </div>
    );
};

export default Comment;