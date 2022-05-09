const { body, validationResult } = require("express-validator");

const checkCompany = () => {
  return [
    body("cpn_name").notEmpty().withMessage("Company name is require"),
    body("cpn_serialNumber")
      .notEmpty()
      .withMessage("The Company of Serial Number Serial  is require"),
    body("cpn_phone").notEmpty().withMessage("Phone is require"),
    body("cpn_tell").notEmpty().withMessage("Tell is require"),
    body("cpn_fromDate")
      .isISO8601()
      .toDate()
      .withMessage("Start Date promise is require"),
    body("cpn_endDate").isISO8601().toDate().withMessage("The End is require"),
    body("cpn_state").notEmpty().withMessage("Status is require"),
  ];
};

function RenderCompany(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkCompany, RenderCompany };
