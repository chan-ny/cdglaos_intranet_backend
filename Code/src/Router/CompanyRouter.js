const Views = require("../Views/index");

const express = require("express");
const router = express.Router();

router.post("/gen", Views.Company.CreateCompany);
router.put("/upimg/:Id", Views.Company.UpdateCompanyImage);
router.put("/uptxt", Views.Company.UpdateCompanyText);
router.get("/dis/:Id", Views.Company.DisableCompany);
router.put("/renew/:Id", Views.Company.RenewCompany);

module.exports = router;
