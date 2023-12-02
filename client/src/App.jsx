import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
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
import FighterEdit from './components/fighter-edit/FighterEdit';
import FighterDelete from './components/fighter-delete/FighterDelete';

function App() {
    return (
        <AuthProvider>
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
                            path={Path.EDIT_FIGHTER}
                            element={<FighterEdit />}
                        ></Route>
                        <Route
                            path={Path.DELETE_FIGHTER}
                            element={<FighterDelete />}
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
        </AuthProvider>
    );
}

export default App;
