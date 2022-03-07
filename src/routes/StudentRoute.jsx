import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const StudentRoute = ({ children }) => {
    let { user } = useContext(AuthContext);
    let link;

    if (!user) {
        return <Navigate to='/login' />;
    } else {
        if (user.role === 'teacher' || user.role === 'superAdmin') {
            link = '/leaderboard';
        }
        
    }

    return user.role === 'superAdmin' || user.role === 'teacher' ? <Navigate to={link} /> : children;
}

export default StudentRoute;