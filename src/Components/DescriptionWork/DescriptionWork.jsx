import './DescriptionWork.css';
import React from 'react'

function DescriptionWork({ description }) {

    return (
        <div className='info-description-content'>
            <p className='info-description'>{description}</p>
        </div>
    )
};

export default DescriptionWork;
