import { useEffect, useContext } from 'react';
import AuthContext from '../../helpers/AuthContext';

function Logout() {
    const {logoutUser} = useContext(AuthContext);
    useEffect(() => {
        logoutUser();
    }, [logoutUser]);

    return null;
}

export default Logout;