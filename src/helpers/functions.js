import jwt_decode from 'jwt-decode';
import dayjs from "dayjs";

function checkExp (authTokens) {
    const user = jwt_decode(authTokens.jwtToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    return isExpired;
}

export {
    checkExp
};