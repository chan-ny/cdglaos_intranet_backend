const { body, validationResult } = require("express-validator");

const checkEvaluation = () => {
  return [
    body("hr_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("HumanRtesource Id is require"),
    body("employee_Id").notEmpty().withMessage("Employee Id is require"),
    body("typevalaution_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("Type Evaluation Id is require"),
    body("ev_status").notEmpty().withMessage("State ment is require"),
    body("ev_content").notEmpty().withMessage("Content is require"),
    body("ev_fromDate")
      .isISO8601()
      .toDate()
      .withMessage("From Date is require"),
    body("ev_endDate").isISO8601().toDate().withMessage("End Date is require"),
  ];
};

function RenderEvaluation(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkEvaluation, RenderEvaluation };
