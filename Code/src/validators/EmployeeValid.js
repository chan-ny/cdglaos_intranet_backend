const { body, validationResult } = require("express-validator");

const checkStaff = () => {
  return [
    body("role_Id").notEmpty().withMessage("Role is require"),
    body("uemail").isEmail().withMessage("Email is require"),
    body("ustatus").notEmpty().withMessage("Status is require"),
    body("upassowrd")
      .isLength({ min: 8 })
      .withMessage("password must be then 8 charactor")
      .notEmpty()
      .withMessage("Password is require"),
    body("company_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("Company Id is require"),
    body("gender_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("Gender Id is require"),
    body("province_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("Province Id is require"),
    body("district_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("District Id is require"),
    body("position_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("Position Id is require"),
    body("emp_name").notEmpty().withMessage("First Name is require"),
    body("emp_lastname").notEmpty().withMessage("Last Name is require"),
    body("emp_engname").notEmpty().withMessage("English Name is require"),
    body("emp_birstday")
      .isISO8601()
      .toDate()
      .withMessage("Birth Day is require"),
    body("emp_age").notEmpty().withMessage("Age is require"),
    body("emp_race").notEmpty().withMessage("The Race is require"),
    body("emp_nationality")
      .notEmpty()
      .withMessage("The Nationality is require"),
    body("emp_religoin").notEmpty().withMessage("The Religoin is require"),
    body("emp_phone").notEmpty().withMessage("Phone is require"),
  ];
};

function RenderStaff(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkStaff, RenderStaff };
