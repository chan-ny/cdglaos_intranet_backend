const { body, validationResult } = require("express-validator");
const { Admin } = require("../Model");

const CheckAdmin = () => {
  return [
    body("role_Id").notEmpty().withMessage("Role is require"),
    body("ad_email")
      .custom((value) => {
        return Admin.findOne({
          where: {
            ad_email: value,
          },
        }).then((admin) => {
          if (admin) {
            return Promise.reject("Email already is use");
          }
        });
      })
      .isEmail()
      .withMessage("Email is require"),
    body("ad_status").notEmpty().withMessage("Status is require"),
    body("ad_password").isLength({ min: 8 }).withMessage("password is require"),
  ];
};

function RedenAdmin(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { CheckAdmin, RedenAdmin };
