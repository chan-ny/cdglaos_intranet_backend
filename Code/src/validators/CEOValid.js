const { body, validationResult } = require("express-validator");

const checkCEO = () => {
  return [
    body("ceo_name").notEmpty().withMessage("CEO name is require"),
    body("company_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("Company Id is require"),
    body("ceo_phone").notEmpty().withMessage("Phone is require"),
    body("ceo_tell").notEmpty().withMessage("Tell is require"),
    //part User
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

function RenderCEO(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkCEO, RenderCEO };
