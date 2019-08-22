const CONFIG_JWT = require('../config/jwt/config')
const jwt = require('jsonwebtoken')
const moment = require('moment');

class VerifyTokenMiddleware{
    // Verify Token
    verifyToken(req, res, next){
        var authorizationHeader  = req.header('Authorization')

        if(!authorizationHeader) {
            res.status(403).json({message: "Your request have no authorization header"})
        }

        if(authorizationHeader !== 'undefined'){
            // split at the space
            var bearer = authorizationHeader.split(' ')
            // get token from array
            var bearerToken = bearer[1]

            var payload = jwt.decode(bearerToken, CONFIG_JWT.TOKEN_SECRET)

            if(payload.exp <= moment().unix()) {
                res.status(401).json({message: "Token has expired"});
            }else{
                // set the token
                req.token = bearerToken
            }
        }
        // next middleware
        next()
    }
}

const verifyTokenMiddleware = new VerifyTokenMiddleware()
module.exports = verifyTokenMiddleware