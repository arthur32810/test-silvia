import { Link } from "react-router-dom";
import React from 'react';
import './Error.css';


function Error() {
    return (
        <section className='error-container-all'>
            <div className='error-container-title'>
                <h1 className='error-title'>404</h1>
            </div>
            <div className='error-container-text'>
                <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className='error-container-link'>
                <Link to='/' className='error-link'>
                    Retournez sur la page d'accueil
                </Link>
            </div>
        </section>
    )
}

export default Error