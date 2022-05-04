const JWT = require("jsonwebtoken");
const config_db = require("../config/config_db");
module.exports = {
  jwtCreate(token) {
    return JWT.sign(token, config_db.authentication.JwtSecret, {
      expiresIn: "8h",
    });
  },
};
