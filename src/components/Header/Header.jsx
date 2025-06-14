import React from 'react';
import './Header.css';
import { FaShoppingBag, FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
         
            <a href="/" className="logo" aria-label="Mr. Pops">
                <img src="/logo.png" alt="" />
            </a>



            <div className="nav-right">
                <div className="nav-item cart">
                    <div className="icon-box">
                        <FaShoppingBag />
                    </div>
                    <div className="count-box">0</div>
                </div>
                <div className="nav-item">Flavours</div>
                <div className="nav-item">
                    Menu <FaBars className="menu-icon" />
                </div>
            </div>
        </header>
    );
};

export default Header;
