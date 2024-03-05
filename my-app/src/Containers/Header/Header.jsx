import './Header.css';
import React from 'react';
import logo from '../../img/Logo/silvia1.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className='navbar-content'>
                <NavLink to='/'>
                    <img
                        src={logo}
                        alt='silvia brundu Logo'
                        className='navbar-logo'
                    />
                </NavLink>
                <ul className='navlink-content'>
                    <li className='navlink-containers'>
                        <a href='#a-propos'>A propos</a>
                    </li>
                    <li className='navlink-containers'>
                        <a href="/#mes-projets">Mes projets</a>
                    </li>
                    <li className='navlink-containers'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

};


export default Header