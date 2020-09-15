import { Avatar, Typography } from '@material-ui/core';
import React from 'react';

const User = ({user, data}) => {
    const {body} = data;
    return (
        <div>
             <div className="d-flex align-self-start border-bottom p-2">
                <div>
                    <Avatar alt="Remy Sharp" src={user.picture.thumbnail}/>
                </div>
                <div className="pl-2">
                    <Typography style={{fontSize: 15}}>{user.name.first} {user.name.last}</Typography>
                    <Typography color="textSecondary" style={{fontSize: 13}} gutterBottom>{user.email}</Typography>
                    <Typography style={{maxWidth:500, fontSize: 12}} variant="body2" component="p">{body}</Typography>
                </div>
            </div>
        </div>
    );
};

export default User;