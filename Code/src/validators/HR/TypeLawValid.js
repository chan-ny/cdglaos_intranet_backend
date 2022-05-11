const { body, validationResult } = require("express-validator");

const checkTypelaw = () => {
  return [
    body("hr_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("humanResource Id is require"),
    body("tl_title").notEmpty().withMessage("Type name is require"),
    body("tl_status").notEmpty().withMessage("Status is require"),
  ];
};

function RenderTypelaw(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkTypelaw, RenderTypelaw };
