import React, { useEffect, useState } from 'react';
import User from '../Components/User/User';

const UserModel = ({data}) => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => setUsers(data.results))
        .catch(er => console.log(er));
    },[]);

    return (
        <div>
           {
               users.map(user => <User user={user} data={data} key={data.id}></User>)
           }
        </div>
    );
};

export default UserModel;