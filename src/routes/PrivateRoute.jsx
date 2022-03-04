import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const PrivateRoute = ({children}) => {
    let { user } = useContext(AuthContext);

    if(!user) {
        return (<Navigate to='/login' />);
    }

    return user.role === 'superAdmin' || user.role === 'teacher' || user.role === 'student' ? children : <Navigate to='/login' />
}

export default PrivateRoute;