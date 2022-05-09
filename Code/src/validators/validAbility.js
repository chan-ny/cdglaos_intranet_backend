const { body, validationResult } = require("express-validator");

const checkAbility = () => {
  return [
    body("employee_Id").notEmpty().withMessage("Employee Id is requre"),
    body("at_language").notEmpty().withMessage("Language is require"),
    body("at_speciafic").notEmpty().withMessage("Speciafic is require"),
  ];
};

function RenderAbility(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkAbility,
  RenderAbility,
};
