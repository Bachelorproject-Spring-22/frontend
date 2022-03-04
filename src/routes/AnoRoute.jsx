import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const PrivateRoute = ({ children }) => {
    let { user } = useContext(AuthContext);

    if (user) {
        return (<Navigate to='/home' />);
    }

    return user.role === 'superAdmin' || user.role === 'teacher' || user.role === 'student' ? <Navigate to='/home' /> : children;
}

export default PrivateRoute;