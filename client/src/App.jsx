import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from './contexts/authContext';
import * as authService from './services/authService';

import Home from './components/Home';
import Header from './components/header/Header';
import Footer from './components/Footer';
import FighterList from './components/fighter-list/FighterList';
import FighterCreate from './components/fighter-create/FighterCreate';
import FighterDetails from './components/fighter-details/FighterDetails';
import Login from './components/login/Login';
import Register from './components/register/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async ({ email, password }) => {
        const result = await authService.login(email, password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    };

    const values = {
        loginSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            <>
                <Header />
                <div className='main'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route
                            path='/fighters'
                            element={<FighterList />}
                        ></Route>
                        <Route
                            path='/fighters/create'
                            element={<FighterCreate />}
                        ></Route>
                        <Route
                            path='/fighters/:fighterId/details'
                            element={<FighterDetails />}
                        ></Route>
                        <Route path='/users/login' element={<Login />}></Route>
                        <Route
                            path='/users/register'
                            element={<Register />}
                        ></Route>
                    </Routes>
                </div>
                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
