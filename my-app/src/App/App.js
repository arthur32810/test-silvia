import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Page/Home/Home';

function App() {
    return (
        <div className='body-container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App