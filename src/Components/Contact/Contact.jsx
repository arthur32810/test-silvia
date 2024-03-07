import React from 'react';
import './Contact.css';
import mail from '../../img/Icone/mail.webp'
import phone from '../../img/Icone/phone.webp'


function Contact() {
    return (
        <>
            <h2 className='contact-title' id='contact'> Contact </h2>
            <div className='contact-content'>
                <div className='contact-containers'>
                    <img
                        src={mail}
                        alt='email'
                        className='contact-icone'
                    />
                    <a href='mailto:silviabrundu13@gmail.com' className='contact-text'>silviabrundu13@gmail.com</a>
                </div>
                <div className='contact-containers'>
                    <img
                        src={phone}
                        alt='téléphone'
                        className='contact-icone'
                    />
                    <p className='contact-text'>06 29 30 30 53</p>
                </div>
            </div>


        </>
    )
}

export default Contact;