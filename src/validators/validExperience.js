const { body, check, validationResult } = require("express-validator");

const checkExperience = () => {
  return [
    body("employee_Id").isNumeric().withMessage("Employee Id must be Number"),
    body("epr_companyName").notEmpty().withMessage("Compant name is require"),
    check("epr_fromdate")
      .isISO8601()
      .toDate()
      .withMessage("From Date is require"),
    check("epr_toDate").isISO8601().toDate().withMessage("To Date is require"),
    body("epr_position").notEmpty().withMessage("Position is require"),
    body("epr_salary").notEmpty().withMessage("Salary is require"),
  ];
};

function RenderExperience(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkExperience,
  RenderExperience,
};
