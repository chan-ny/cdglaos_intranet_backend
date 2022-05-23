const Views = require("../Views/index");
const Valid = require("../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkCEO(),
  Valid.RenderCEO,
  Views.ChiefExecutiveOfficer.CreateCEO
);
router.put("/upimg/:Id", Views.ChiefExecutiveOfficer.UploadProfile);
router.put("/change_img/:Id", Views.ChiefExecutiveOfficer.ChangeProfile);
router.put("/uptxt/:Id", Views.ChiefExecutiveOfficer.UpdateCEOText);
router.delete("/:Id", Views.ChiefExecutiveOfficer.RemoveCEO);
router.get("/", Views.ChiefExecutiveOfficer.AllCEO);

module.exports = router;
