import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const TeacherRoute = ({children}) => {
    let { user } = useContext(AuthContext);
    let link;

    if(!user) {
        return (<Navigate to='/login' />);
    } else {
        if (user.role === 'student') {
            link = '/home';
        }
    }

    return user.role === 'superAdmin' || user.role === 'teacher' ? children : <Navigate to={link} />
}

export default TeacherRoute;