import React from 'react';
import mainstyles from './../css/main.module.css'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className={mainstyles.header}>
            <Navbar />
        </div>
    );
};

export default Header;