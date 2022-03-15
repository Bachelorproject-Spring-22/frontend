import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const TeacherRoute = ({children}) => {
    let { user } = useContext(AuthContext);

    if(!user) {
        return (<Navigate to='/login' />);
    } else {
        if (user.role === 'student') {
            return (<Navigate to='/home' />);
        }
    }

    return (children ? children : <Outlet />);
}

export default TeacherRoute;