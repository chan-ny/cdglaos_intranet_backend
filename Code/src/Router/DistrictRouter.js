const Valaidation = require("../validators/index");
const View = require("../Views/index");

const express = require("express");
const router = express.Router();

router.post(
  "/gen",
  Valaidation.checkDistrict(),
  Valaidation.RenderDistrict,
  View.District.CreateDistrict
);
router.put(
  "/up",
  Valaidation.checkDistrict(),
  Valaidation.RenderDistrict,
  View.District.UpdateDistrict
);
router.get("/all", View.District.AllDistrict);
router.get("/sel/:Id", View.District.GetDistrict);

module.exports = router;
