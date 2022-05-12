const { body, validationResult } = require("express-validator");

const checkWelfare = () => {
  return [
    body("hr_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("HumanRtesource Id is require"),
    body("wf_title").notEmpty().withMessage("Title is require"),
    body("wf_content").notEmpty().withMessage("Content is require"),
    body("wf_status").notEmpty().withMessage("Status is require"),
  ];
};

function RenderWelfare(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkWelfare, RenderWelfare };
