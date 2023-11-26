import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from './contexts/authContext';
import * as authService from './services/authService';
import { Path } from './constants/paths';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import FighterList from './components/fighter-list/FighterList';
import FighterCreate from './components/fighter-create/FighterCreate';
import FighterDetails from './components/fighter-details/FighterDetails';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import NotFound from './components/not-found/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <Route path={Path.HOME} element={<Home />}></Route>
                        <Route
                            path={Path.ALL_FIGHTERS}
                            element={<FighterList />}
                        ></Route>
                        <Route
                            path={Path.CREATE_FIGHTER}
                            element={<FighterCreate />}
                        ></Route>
                        <Route
                            path={Path.FIGHTER_DETAILS}
                            element={<FighterDetails />}
                        ></Route>
                        <Route path={Path.LOGIN} element={<Login />}></Route>
                        <Route
                            path={Path.REGISTER}
                            element={<Register />}
                        ></Route>
                        <Route path={Path.LOGOUT} element={<Logout />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </div>
                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
