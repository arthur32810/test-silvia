import './About.css';
import React from 'react';
import profil from '../../img/Profil/silviaBrundu.webp';

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
                <h1> Bonjour, je suis Silvia Brundu </h1>
                <p>Etudiante en developpement Web</p>
            </div>
        </section>
    )

};


export default About