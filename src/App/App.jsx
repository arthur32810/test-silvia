import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Work from '../Page/Work/Work';
import Header from '../Containers/Header/Header';
import Footer from '../Containers/Footer/Footer';
import PageNotFound from '../Page/PageNotFound/PageNotFound';

function App() {
    return (
        <div className='body-container'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Work/:id' element={<Work />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App