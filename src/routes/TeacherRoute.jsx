import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const TeacherRoute = ({children}) => {
    let { user } = useContext(AuthContext);

    if(!user) {
        return (<Navigate to='/login' />);
    }

    return user.role === 'superAdmin' || user.role === 'teacher' ? children : <Navigate to='/login' />
}

export default TeacherRoute;