const { body, validationResult } = require("express-validator");

const checkBornLocation = () => {
  return [
    body("employee_Id").isNumeric().withMessage("Employee Id must be Number"),
    body("province_Id").isNumeric().withMessage("Province Id must be Number"),
    body("district_Id").isNumeric().withMessage("District Id must be Number"),
    body("bl_village").notEmpty().withMessage("Village is require"),
  ];
};

function RenderBornLocation(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkBornLocation,
  RenderBornLocation,
};
