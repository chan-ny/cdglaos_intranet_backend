const { body, validationResult } = require("express-validator");

const CheckUser = () => {
  return [
    body("role_Id").notEmpty().withMessage("Role is require"),
    body("uemail").isEmail().withMessage("Email is require"),
    body("ustatus").notEmpty().withMessage("Status is require"),
    body("upassowrd")
      .isLength({ min: 8 })
      .withMessage("password must be then 8 charactor")
      .notEmpty()
      .withMessage("Password is require"),
  ];
};

function RedenUser(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { CheckUser, RedenUser };
