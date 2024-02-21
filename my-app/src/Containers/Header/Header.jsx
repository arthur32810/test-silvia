import './Header.css';
import React from 'react';
import logo from '../../img/Logo/silvia1.png';

function Header() {
    return (
        <header>
            <nav className='navbar-content'>
                <img
                    src={logo}
                    alt='silvia brundu Logo'
                    className='navbar-logo'
                />
                <ul className='navlink-content'>
                    <li className='navlink-containers'>
                        <a href='#a-propos'>A propos</a>
                    </li>
                    <li className='navlink-containers'>
                        <a href="#nos-realisations">Mes projets</a>
                    </li>
                    <li className='navlink-containers'>
                        <a href="#notre-equipe">contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

};


export default Header