import React from 'react';
import '../Styles/index.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <div className="logos">
                    <h1>
                        <a href="">BULLET</a>
                    </h1>
                </div>
                <div className="menu">
                    <a href="">Home</a>
                    <a href="">Hero-Section</a>
                    <a href="">Projects</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Footer</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;