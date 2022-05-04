const Views = require("../Views/index");
const Validation = require("../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/gen",
  Validation.chaeckProvince(),
  Validation.RenderProvince,
  Views.Province.CreateProvince
);
router.put(
  "/up",
  Validation.chaeckProvince(),
  Validation.RenderProvince,
  Views.Province.UpdateProvince
);
router.delete("/del/:Id", Views.Province.RemoveProvince);
router.get("/all", Views.Province.AllProvince);
router.get("/sel/:Id", Views.Province.GetProvince);

module.exports = router;
