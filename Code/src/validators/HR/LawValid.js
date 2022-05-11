const { body, validationResult } = require("express-validator");

const checklaw = () => {
  return [
    body("hr_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("HumanRtesource Id is require"),
    body("typeLaw_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("Type law Id is require"),
    body("ltitle").notEmpty().withMessage("Title is require"),
    body("lcontent").notEmpty().withMessage("Content is require"),
    body("lstatus").notEmpty().withMessage("Status is require"),
  ];
};

function Renderlaw(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checklaw, Renderlaw };
