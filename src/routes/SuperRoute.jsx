import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const SuperRoute = ({children}) => {
    let { user } = useContext(AuthContext);

    return user.role === 'superAdmin' ? children : <Navigate to='/login' />
}

export default SuperRoute;