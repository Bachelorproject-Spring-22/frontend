import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const TeacherRoute = ({children}) => {
    let { user } = useContext(AuthContext);

    return user.role === 'superAdmin' || user.role === 'teacher' ? children : <Navigate to='/login' />
}

export default TeacherRoute;