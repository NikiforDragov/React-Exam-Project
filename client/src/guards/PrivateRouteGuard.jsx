import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/authContext';

export default function PrivateRouteGuard({ children }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/users/login' />;
    }

    return children ? children : <Outlet />;
}
