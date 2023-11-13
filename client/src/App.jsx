import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FighterCard from './components/FighterCard';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Header />
            <div className='main'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/fighters' element={<FighterCard />}></Route>
                    <Route path='/users/login' element={<Login />}></Route>
                    <Route path='/users/register' element={<Register />}></Route>
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
