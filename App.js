// src/App.js
import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import StockList from './components/stocklist';
import './App.css';

function App() {
    return (
        <div className="container">
            <Sidebar />
            <main className="main-content">
                <Header />
                <StockList />
            </main>
        </div>
    );
}

export default App;
