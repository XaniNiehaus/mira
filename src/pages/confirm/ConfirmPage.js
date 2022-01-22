import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import {IconButton, Toolbar} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const ConfirmPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                    >
                        <KeyboardBackspaceIcon/>
                    </IconButton>
                    <h2>Let us get in touch</h2>
                </Toolbar>
            </AppBar>
            <h1>CONFIRM!</h1>
            <Link to="/">Home</Link>
            <Link to="/tabs">tabs</Link>
            <Link to="/confirm">confirm</Link>
        </div>
    );
};

export default ConfirmPage;
