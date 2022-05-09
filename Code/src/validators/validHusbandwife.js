const { body, validationResult } = require("express-validator");

const checkHW = () => {
  return [
    body("employee_Id").notEmpty().withMessage("Employee Id must be Number"),
    body("hw_name").notEmpty().withMessage("Husb or wife name is require"),
    body("hw_worklocation")
      .notEmpty()
      .withMessage("Husb or wife Work of Location is require"),
    body("hw_position").notEmpty().withMessage("Position is require"),
    body("hw_career").notEmpty().withMessage("Position is require"),
    body("hw_numberChild")
      .isNumeric()
      .withMessage("Member child must be Number"),
  ];
};

function RenderHW(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkHW,
  RenderHW,
};
