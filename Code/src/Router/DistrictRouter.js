const Valaidation = require("../validators/index");
const View = require("../Views/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valaidation.checkDistrict(),
  Valaidation.RenderDistrict,
  View.District.CreateDistrict
);
router.put(
  "/:Id",
  Valaidation.checkDistrict(),
  Valaidation.RenderDistrict,
  View.District.UpdateDistrict
);
router.get("/", View.District.AllDistrict);
router.get("/:Id", View.District.GetDistrict);
router.delete("/:Id", View.District.DistrictDelete);

module.exports = router;
