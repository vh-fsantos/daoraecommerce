const jwt = require("express-jwt");
const secret = require("../config").secret;

function getTokenFromHeader(req) {
    if (!req.headers.authorization) return null;
    const token = req.headers.authorization.split(" ")[1];

    if (token[0] !== "Ecommerce") return null;
    return token[1];
}

const auth = {
    required: jwt({
        secret,
        userProperty: 'payLoad',
        algorithms: ["HS256"],
        getToken: getTokenFromHeader
    }),
    optional: jwt({
        secret,
        userProperty: 'payLoad',
        credentialsRequired: false,
        algorithms: ["HS256"],
        getToken: getTokenFromHeader
    })
}

module.exports = auth;