const { body, check, validationResult } = require("express-validator");

const CheckHighschool = () => {
  return [
    body("employee_Id").notEmpty().withMessage("Employee Id must be Number"),
    body("hs_name").notEmpty().withMessage("High School name is require"),
    check("hs_fromDate")
      .isISO8601()
      .toDate()
      .withMessage("From Date is require"),
    check("hs_toDate").isISO8601().toDate().withMessage("To Date is require"),
  ];
};

function RenderHighschool(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  CheckHighschool,
  RenderHighschool,
};
