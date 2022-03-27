const JWT = require('jsonwebtoken') ;
const config_db = require('../Config/config_db')
module.exports = {
    jwtCreate(token) {
        return JWT.sign(token, config_db.authentication.JwtSecret, {
            expiresIn: '8h'
        })
    }
}