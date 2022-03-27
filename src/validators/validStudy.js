const { body, check, validationResult } = require("express-validator");

const checkStudy = () => {
  return [
    body("employee_Id").isNumeric().withMessage("Employee Id must be Number"),
    body("std_name").notEmpty().withMessage("Name is require"),
    body("std_instilutional")
      .notEmpty()
      .withMessage("Instilutional is require"),
    body("std_faculty").notEmpty().withMessage("Faculty is require"),
    body("std_major").notEmpty().withMessage("Major is require"),
    check("std_fromDate")
      .isISO8601()
      .toDate()
      .withMessage("From date is require"),
    check("std_toDate").isISO8601().toDate().withMessage("To date is require"),
  ];
};

function RenderStudy(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next(0);
}

module.exports = {
  checkStudy,
  RenderStudy,
};
