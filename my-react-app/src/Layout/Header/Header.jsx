import React from 'react';
import Logo from '@/Assets/Images/Logo.svg'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} />
            <nav className="nav-header">
                <NavLink to="/home" className="nav-header__nav-link">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="nav-header__nav-link">
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;