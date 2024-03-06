import './About.css';
import React from 'react';
import profil from '../../img/Profil/silviaBrundu.webp';
import html from '../../img/LogoDev/html.webp';
import css from '../../img/LogoDev/css.webp';
import sass from '../../img/LogoDev/sass.webp';
import js from '../../img/LogoDev/javascript.webp';
import react from '../../img/LogoDev/react.webp';

function About() {
    return (
        <section className='about-content' id='a-propos'>
            <div className='about-photo-content'>
                <img
                    src={profil}
                    alt='silvia brundu '
                    className='about-photo-profil'
                />
            </div>
            <div className='about-text-content'>
                <h1> Bonjour, je suis Silvia Brundu <br />intégrateur web</h1>
                <p>travaillant avec:</p>
                <div className='about-logo-content'>
                    <img
                        src={html}
                        alt='logo html '
                        className='about-logo-dev'
                    />
                    <img
                        src={css}
                        alt='logo css '
                        className='about-logo-dev css'
                    />
                    <img
                        src={js}
                        alt='logo javascript '
                        className='about-logo-dev'
                    />
                    <img
                        src={sass}
                        alt='logo sass '
                        className='about-logo-dev'
                    />
                    <img
                        src={react}
                        alt='logo react '
                        className='about-logo-dev'
                    />
                </div>
            </div>
        </section >
    )

};


export default About