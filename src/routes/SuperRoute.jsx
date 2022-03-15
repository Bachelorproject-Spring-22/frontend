import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const SuperRoute = ({children}) => {
    let { user } = useContext(AuthContext);

    if(!user) {
        return (<Navigate to='/login' />);
    } else {
        if (user.role === 'student' || user.role === 'teacher') {
            return <Navigate to='leaderboard' />
        }
    }

    return (children ? children : <Outlet />);
}

export default SuperRoute;