import React from 'react';
import cl from './Header.module.css';
import logo from "../images/logo.png";

const Header = () => {
    return (
        <div>
            <h1 className={cl.header}>
                <button className={cl.moreInfoButton}/>
                <img src={logo} className={cl.logo}/>
            </h1>
        </div>
    );
};

export default Header;