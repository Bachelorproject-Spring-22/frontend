import jwt_decode from 'jwt-decode';
//import dayjs from "dayjs";

function checkExp (authTokens) {
    const user = jwt_decode(authTokens.jwtToken);
    //const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    const isExpired = checkDiff(user.exp);
    return isExpired;
}

function checkDiff(unix) {
    const now = Date.now();
    const input = unix * 1000;
    console.log(`now: ${now}, input: ${input}`);
    if (input < now) {
        return true;
    } else {
        return false;
    }
}

export {
    checkExp,
    checkDiff
};