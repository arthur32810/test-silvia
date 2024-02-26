import React from 'react';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import Works from '../../Components/Works/Works';
import About from '../../Components/About/About';
import './Home.css';


function Home() {
    return (
        <>
            <Header />
            <main>
                <About />
                <Works />
            </main>
            <Footer />
        </>
    )
}

export default Home;