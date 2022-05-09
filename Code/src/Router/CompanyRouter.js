const Views = require("../Views/index");
const Valid = require("../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkCompany(),
  Valid.RenderCompany,
  Views.Company.CreateCompany
);
router.put("/upimg/:Id", Views.Company.UpdateCompanyImage);
router.put("/uptxt", Views.Company.UpdateCompanyText);
router.get("/dis/:Id", Views.Company.DisableCompany);
router.put("/renew/:Id", Views.Company.RenewCompany);
router.get("/", Views.Company.AllCompany);

module.exports = router;
