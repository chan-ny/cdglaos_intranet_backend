const { body, validationResult } = require("express-validator");

const checkPolicy = () => {
  return [
    body("hr_Id")
      .isNumeric()
      .notEmpty()
      .withMessage("HumanRtesource Id is require"),
    body("pc_title").notEmpty().withMessage("Title is require"),
    body("pc_content").notEmpty().withMessage("Content is require"),
    body("pc_status").notEmpty().withMessage("Status is require"),
  ];
};

function RenderPolicy(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkPolicy, RenderPolicy };
