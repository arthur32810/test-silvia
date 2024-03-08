import './TitleWorks.css';
import React from 'react';

function TitleWorks({ title }) {

    return (
        <div className='info-title-content'>
            <h1 className='info-title'>{title}</h1>
        </div>
    )
};

export default TitleWorks;