import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/data.json';
import TitleWorks from '../TitleWorks/TitleWorks';
import Tags from '../Tags/Tags';
import DescriptionWork from '../DescriptionWork/DescriptionWork';
import LinkGithub from '../LinkGithub/LinkGithub';

import './InfoWorks.css';




function InfoWorks() {
    const { id } = useParams();

    const { title, tags, description, link } = data.find((information) => information.id === id)

    return (
        <div className='info-container'>
            <div className='info-1'>
                <TitleWorks title={title} />
            </div>
            <div className='info-2'>
                <Tags tags={tags} />
            </div>
            <div className='info-3'>
                <DescriptionWork description={description} />
            </div>
            <div className='info-4'>
                <LinkGithub link={link} />

            </div>
        </div>
    )
}

export default InfoWorks