// src/components/StockList.js
import React from 'react';
import './stocklist.css';

const StockList = () => {
    const stocks = [
        'Google',
        'Microsoft',
        'Apple',
        'Infosys',
        'Reliance Pvt Ltd.',
        'Tata Consultancy Services',
        'Boeing'
    ];

    return (
        <section className="content">
            <h2>Recent stocks you have invested in</h2>
            <div className="stock-list">
                {stocks.map((stock, index) => (
                    <div key={index} className="stock-item">
                        {stock} <span>&#x2192;</span>
                    </div>
                ))}
            </div>
            <button className="exit-button">Exit</button>
        </section>
    );
};

export default StockList;
