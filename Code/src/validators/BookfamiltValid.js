const { body, validationResult } = require("express-validator");

const checkBookfamily = () => {
  return [
    body("employee_Id").notEmpty().withMessage("Employee Id is require"),
    body("bf_nohome").notEmpty().withMessage("No house is require"),
    body("bf_unit").notEmpty().withMessage("Unit Number is require"),
    body("bf_approvedDate")
      .isISO8601()
      .toDate()
      .withMessage("Date approved is require"),
    body("bf_expiredDate")
      .isISO8601()
      .toDate()
      .withMessage("Date Expired is require"),
    body("bf_location").notEmpty().withMessage("Location area is require"),
  ];
};

function RenderBookfamily(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkBookfamily, RenderBookfamily };
