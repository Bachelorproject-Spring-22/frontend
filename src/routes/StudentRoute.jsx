import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const StudentRoute = ({ children }) => {
    let { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to='/login' />;
    } else {
        if (user.role === 'teacher' || user.role === 'superAdmin') {
            return <Navigate to='/leaderboard' />
        }
        
    }

    return (children ? children : <Outlet />);
}

export default StudentRoute;