import './Header.css';
import React from 'react';
import logo from '../../img/Logo/silvia1.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                        < Link to='/#a-propos'>A propos</Link>
                    </li>
                    <li className='navlink-containers'>
                        < Link to="/#mes-projets">Mes projets</Link>
                    </li>
                    <li className='navlink-containers'>
                        < Link to="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

};


export default Header