import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const AnoRoute = ({ children }) => {
    let { user } = useContext(AuthContext);

    if (user && user.role === 'student') {
        return <Navigate to='/home' replace />;
    } else if ((user && user.role === 'teacher') || (user && user.role === 'superAdmin')) {
        return <Navigate to='/leaderboard' replace />;
    }

    return (children ? children : <Outlet />);
}

export default AnoRoute;