const { body, validationResult } = require("express-validator");

const checkTypeTraining = () => {
  return [
    body("ttn_name")
      .notEmpty()
      .withMessage("Trainig name is require")
      .isString()
      .withMessage("Type Training must be Character"),
    body("ttn_detail").notEmpty().withMessage("Detail is require"),
    body("ttn_status")
      .notEmpty()
      .withMessage("Status is require")
      .isString()
      .withMessage("Status must be Character"),
  ];
};

function RenderTypeTraining(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next()
}

module.exports = { checkTypeTraining, RenderTypeTraining };
