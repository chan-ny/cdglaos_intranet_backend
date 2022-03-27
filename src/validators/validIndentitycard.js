const { body, check, validationResult } = require("express-validator");

const checkIndentityCard = () => {
  return [
    body("employee_Id").isNumeric().withMessage("Employee Id must be Number"),
    body("ind_nocard").isNumeric().withMessage("No Card must be Number"),
    check("ind_approvedDate")
      .isISO8601()
      .toDate()
      .withMessage("Approved Date is require"),
    check("ind_expiredDate")
      .isISO8601()
      .toDate()
      .withMessage("Expired Date is require"),
    body("ind_location").notEmpty().withMessage("Location is require"),
    body("ind_image").notEmpty().withMessage("Image is require"),
  ];
};

function RenderIndentityCard(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({
      err: err.array(),
    });
  }
  next();
}

module.exports = {
  checkIndentityCard,
  RenderIndentityCard,
};
