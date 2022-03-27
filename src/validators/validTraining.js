const { body, validationResult } = require("express-validator");

const checkTrainig = () => {
  return [
    body("employee_Id").isNumeric().withMessage("Employee Id must be Number"),
    body("typetraining_Id")
      .isNumeric()
      .withMessage("Type training must be Number"),
    body("tn_content").notEmpty().withMessage("Content is require"),
  ];
};

function RenderTraining(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkTrainig,
  RenderTraining,
};
