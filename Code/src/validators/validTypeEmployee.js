const { body, validationResult } = require("express-validator");

const checkTypeEmployee = () => {
  return [
    body("tepy_Name")
      .notEmpty()
      .withMessage("Laos Name is require")
      .isString()
      .withMessage("Lao name must be chearcter"),
    body("tepy_detail")
      .notEmpty()
      .withMessage("English Name is require")
      .isString()
      .withMessage("English must be chearcter"),
    body("tepy_status")
      .notEmpty()
      .withMessage("Status is require")
      .isString()
      .withMessage("Status must be chearcter"),
  ];
};

function RenderTypeEmployee(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next()
}

module.exports = {
  checkTypeEmployee,
  RenderTypeEmployee,
};
