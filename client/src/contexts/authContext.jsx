import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        return {};
    });

    const loginSubmitHandler = async ({ email, password }) => {
        try {
            const result = await authService.login(email, password);
            setAuth(result);
            console.log(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const registerSubmitHandler = async ({ email, password }) => {
        try {
            const result = await authService.register(email, password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate('/');
        } catch (error) {
            console.error('Register failed:', error);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        userId: auth._id,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
