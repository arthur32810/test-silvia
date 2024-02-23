import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Work from '../Page/Work/Work';

function App() {
    return (
        <div className='body-container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/Work/:id" element={<Work />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App