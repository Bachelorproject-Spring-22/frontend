import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const AnoRoute = ({ children }) => {
    let { user } = useContext(AuthContext);

    if (!user) {
        return children;
    } else {
        if (user.role === 'student') {
            return <Navigate to='/home' />;
        } else if (user.role === 'teacher' || user.role === 'superAdmin') {
            return <Navigate to='/leaderboard' />;
        }
    }
}

export default AnoRoute;