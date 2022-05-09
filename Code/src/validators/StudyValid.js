const { body, validationResult } = require("express-validator");

const checkStudy = () => {
  return [
    body("employee_Id").notEmpty().withMessage("Employee Id is required"),
    body("std_name").notEmpty().withMessage("University name is required"),
    body("std_instilutional")
      .notEmpty()
      .withMessage("The Instilaution is required"),
    body("std_faculty").notEmpty().withMessage("The facuty is required"),
    body("std_major").notEmpty().withMessage("The Major is required"),
    body("std_grade").notEmpty().withMessage("Grade is required"),
    body("std_fromDate")
      .isISO8601()
      .toDate()
      .withMessage("Date From is required"),
    body("std_toDate")
      .isISO8601()
      .toDate()
      .withMessage("The End Date is required"),
  ];
};

function RenderStudy(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkStudy,
  RenderStudy,
};
