const { body, validationResult } = require("express-validator");

const checkParent = () => {
  return [
    body("employee_Id").isNumeric().withMessage("Employee Id must be Number"),
    body("pr_name").notEmpty().withMessage("Name is require"),
    body("pr_age").notEmpty().withMessage("Age is require"),
    body("pr_career").notEmpty().withMessage("Career is require"),
  ];
};

function RenderParent(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkParent,
  RenderParent,
};
