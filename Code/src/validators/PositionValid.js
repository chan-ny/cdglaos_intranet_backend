const { body, validationResult } = require("express-validator");

const checkPosition = () => {
  return [
    body("p_Name").notEmpty().withMessage("Position name is require"),
    body("p_status").notEmpty().withMessage("Status is require"),
  ];
};

function RenderPosition(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkPosition, RenderPosition };
