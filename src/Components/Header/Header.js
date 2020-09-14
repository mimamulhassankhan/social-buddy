import { AppBar,Toolbar } from '@material-ui/core';
import React from 'react';
import { Image } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <AppBar position="static" className="bg-dark">
                <Toolbar>
                    <Image className="p-2 ml-3" height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Yammer_logo.svg/1024px-Yammer_logo.svg.png"/>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;