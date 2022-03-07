import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const SuperRoute = ({children}) => {
    let { user } = useContext(AuthContext);
    let link;

    if(!user) {
        return (<Navigate to='/login' />);
    } else {
        if (user.role === 'student' || user.role === 'teacher') {
            link = '/leaderboard';
        }
    }

    return user.role === 'superAdmin' ? children : <Navigate to={link} />
}

export default SuperRoute;