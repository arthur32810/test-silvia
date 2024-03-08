import data from '../../Data/data.json';
import WorkCard from '../WorkCard/WorkCard';
import React from 'react';
import './Works.css';


//je récupère le fichier jSon

function Works() {
    return (
        <section className='works-container-box'>
            <h2 className='works-container-title' id='mes-projets'> Projets </h2>
            <div className='works-container'>{data.map((work, index) => { //index = key, aide react a identifier les elements qui vont changer
                return (
                    <div key={index} className='works-content' >
                        <WorkCard work={work} ></WorkCard>
                    </div>
                )
            }
            )}
            </div>
        </section>
    )
}

export default Works