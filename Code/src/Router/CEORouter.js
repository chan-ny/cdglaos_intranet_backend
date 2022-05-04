const Views = require("../Views/index");

const express = require("express");
const router = express.Router();

router.post("/gen", Views.ChiefExecutiveOfficer.CreateCEO);
router.put("/upimg/:Id", Views.ChiefExecutiveOfficer.UploadProfile);
router.put("/change_img/:Id", Views.ChiefExecutiveOfficer.ChangeProfile);
router.put("/uptxt/:Id", Views.ChiefExecutiveOfficer.UpdateCEOText);
router.get("/all", Views.ChiefExecutiveOfficer.AllCEO);

module.exports = router;
