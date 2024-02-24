import React from 'react';
import Error from '../../Components/Error/Error';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';

function PageNotFound() {
    return (
        <>
            <Header />
            <Error />
            <Footer />
        </>
    )
}

export default PageNotFound;