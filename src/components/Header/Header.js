import React from 'react';

import "./Header.css"
const Header = () => {
    return (
        <div>
            <h1 className='text-info'>Well come to Countries </h1>
            <nav className='fs-5'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;