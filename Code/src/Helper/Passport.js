const passport = require("passport");
const { Role } = require("../Model");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const config_db = require("../config/config_db");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config_db.authentication.JwtSecret,
    },
    async function (jwtPayload, done) {
      try {
        const role = await Role.findOne({
          where: {
            r_id: jwtPayload.role_Id,
          },
        });
        if (!role) {
          return done(new Error(), false);
        }
        return done(null, role);
      } catch (error) {
        return done(new Error(), false);
      }
    }
  )
);

module.exports = null;
