// src/components/Header.js
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <input type="text" placeholder="Search here..." />
            <div className="user-info">
                <span>Eng (IN)</span>
                <span className="user">user_19</span>
                <span className="role">Admin</span>
            </div>
        </header>
    );
};

export default Header;
