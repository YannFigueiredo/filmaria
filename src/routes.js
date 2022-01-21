import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';

import Header from './components/Header';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme" element={<Filme/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;