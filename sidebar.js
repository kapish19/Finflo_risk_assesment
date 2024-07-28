// src/components/Sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo">FinFlo</div>
            <nav className="nav">
                <a href="#">Dashboard</a>
                <a href="#">Investment Advisory</a>
                <a href="#" className="active">Financial Planning</a>
                <a href="#">Risk Assessment</a>
                <a href="#">Customer Support</a>
                <a href="#">Settings</a>
                <a href="#">Sign Out</a>
            </nav>
            <div className="locate-us">
                <div className="locate-text">Locate Us</div>
            </div>
        </aside>
    );
};

export default Sidebar;
