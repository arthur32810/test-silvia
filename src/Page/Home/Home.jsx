import React from 'react';
import Works from '../../Components/Works/Works';
import About from '../../Components/About/About';
import './Home.css';


function Home() {
    return (
        <>
            <main>
                <About />
                <Works />
            </main>
        </>
    )
}

export default Home;