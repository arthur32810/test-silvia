import React from 'react';
import './Contact.css';
import mail from '../../img/Icone/mail.png'
import phone from '../../img/Icone/phone.png'


function Contact() {
    return (
        <>
            <h3 className='contact-title'> Contact </h3>
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