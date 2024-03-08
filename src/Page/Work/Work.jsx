import data from '../../Data/data.json';
import WorkSlide from '../../Components/WorkSlide/WorkSlide';
import InfoWorks from '../../Components/InfoWorks/InfoWorks';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React from 'react';

function Work() {
    const { id } = useParams();

    const workId = data.find((element) => element.id === id);

    if (!workId) {
        return <Navigate to='/404' replace />;
    }

    return (
        <>
            <main>
                <WorkSlide />
                <InfoWorks />
            </main>
        </>
    )
}
export default Work