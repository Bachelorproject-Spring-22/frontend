import jwt_decode from 'jwt-decode';

function checkExp(authTokens) {
    const user = jwt_decode(authTokens.jwtToken);
    const isExpired = checkDiff(user.exp);
    return isExpired;
}

function checkDiff(unix) {
    const now = Date.now();
    const input = unix * 1000;
    if (input < now) {
        return true;
    } else {
        return false;
    }
}

const appendSuffix = (num = 1) => {
    let suffix = "th";
    if (num === 0) suffix = "";
    if (num % 10 === 1 && num % 100 !== 11) suffix = "st";
    if (num % 10 === 2 && num % 100 !== 12) suffix = "nd";
    if (num % 10 === 3 && num % 100 !== 13) suffix = "rd";

    return suffix;
};

export {
    checkExp,
    checkDiff,
    appendSuffix
};