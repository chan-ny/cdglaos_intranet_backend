const { body, validationResult } = require("express-validator");

const checkIdentityCard = () => {
  return [
    body("employee_Id").notEmpty().withMessage("Employee Id is require"),
    body("ind_cardNO").notEmpty().withMessage("No Card is require"),
    body("ind_approvedDate")
      .isISO8601()
      .toDate()
      .withMessage("Date Approvedis require"),
    body("ind_expiredDate")
      .isISO8601()
      .toDate()
      .withMessage("Date Expired is require"),
    body("ind_location").notEmpty().withMessage("Location is require"),
  ];
};

function RenderIdentityCard(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = { checkIdentityCard, RenderIdentityCard };
