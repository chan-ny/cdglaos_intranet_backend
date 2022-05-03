const { body, validationResult } = require("express-validator");

const chaeckProvince = () => {
  return [
    body("pv_laoName")
      .notEmpty()
      .withMessage("Loas name is require")
      .isString()
      .withMessage("English name must be character"),
    body("pv_engName")
      .notEmpty()
      .withMessage("English name is require")
      .isString()
      .withMessage("English name must be character"),
    body("pv_status")
      .notEmpty()
      .withMessage("Status is require")
      .isString()
      .withMessage("English name must be character"),
  ];
};

function RenderProvince(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { chaeckProvince, RenderProvince };
