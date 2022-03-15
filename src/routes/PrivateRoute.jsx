import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../helpers/AuthContext';

const PrivateRoute = ({children}) => {
    let { user } = useContext(AuthContext);

    if(!user) {
        return (<Navigate to='/login' />);
    }
    
    return (children ? children : <Outlet />);
}

export default PrivateRoute;