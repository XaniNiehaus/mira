import React from 'react';

import {Link} from "react-router-dom";
import img from "./Warhammer_40000_-_The_God_Emperor_of_Mankind.png"


const SplashPage = () => {
    return (
        <div>
            <img src={img} alt=""/>
            <h1>splash</h1>
            <Link to="/">Home</Link>
            <Link to="/tabs">tabs</Link>
            <Link to="/confirm">confirm</Link>
        </div>
    );
};

export default SplashPage;
