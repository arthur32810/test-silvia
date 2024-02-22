import React from 'react';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import Works from '../../Components/Works/Works';
import './Home.css';


function Home() {
    return (
        <>
            <Header />
            <Works />
            <Footer />
        </>
    )
}

export default Home;