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
import Logout from './components/logout/Logout';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        return {};
    });

    const loginSubmitHandler = async ({ email, password }) => {
        const result = await authService.login(email, password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    };

    const registerSubmitHandler = async ({ email, password }) => {
        const result = await authService.register(email, password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

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
                        <Route
                            path='/users/logout'
                            element={<Logout />}
                        ></Route>
                    </Routes>
                </div>
                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
