const { body, validationResult } = require("express-validator");

const checkType_Evaluation = () => {
  return [
    body("hr_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("HumanRtesource Id is require"),
    body("te_title").notEmpty().withMessage("Title is require"),
    body("te_status").notEmpty().withMessage("Status is require"),
  ];
};

function RenderType_Evaluation(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkType_Evaluation, RenderType_Evaluation };
