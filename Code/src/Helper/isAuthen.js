const Passport = require("passport");
module.exports = (req, res, next) => {
  Passport.authenticate("jwt", (err, user) => {
    if (err || !user) {
      res.status(404).send({
        error: "not access",
      });
    } else {
      if (user.dataValues.role_name == "Admin") {
        req.user = user;
        next();
      } else if (user.dataValues.role_name == "User") {
        req.user = user;
        next();
      } else {
        res.status(404).send({
          error: "Plase Login again!!!",
        });
      }
    }
  })(req, res, next);
};
//Customer
// isAuthenUser(req, res, next) {
//   Passport.authenticate("jwt", (err, user) => {
//     if (err || !user) {
//       res.status(404).send({
//         error: "not access",
//       });
//     } else {
//       if (user.dataValues.r_name == "User") {
//         req.user = user;
//         next();
//       } else {
//         res.status(404).send({
//           error: "Plase Login User again!!!",
//         });
//       }
//     }
//   })(req, res, next);
// },
