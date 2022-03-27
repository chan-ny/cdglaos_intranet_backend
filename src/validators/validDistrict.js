const { body, validationResult } = require("express-validator");

const checkDistrict = () => {
  return [
    body("province_Id").notEmpty().withMessage("Province Id is require"),
    body("dt_laoName")
      .notEmpty()
      .withMessage("Lao name is require")
      .isString()
      .withMessage("English name must be character"),
    body("dt_engName")
      .notEmpty()
      .withMessage("English name is require")
      .isString()
      .withMessage("English name must be character"),
    body("dt_status")
      .notEmpty()
      .withMessage("Status is require")
      .isString()
      .withMessage("Status must be charatcter"),
  ];
};

function RenderDistrict(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next()
}

module.exports = { checkDistrict, RenderDistrict };
