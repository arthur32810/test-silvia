import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Work from '../Page/Work/Work';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import PageNotFound from '../Page/PageNotFound/PageNotFound';
import ScrollToHashElement from "../Components/ScrollToHashElement/ScrollToHashElement";


function App() {
    return (
        <div className='body-container'>
            <BrowserRouter>
                <ScrollToHashElement />
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