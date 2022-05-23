const Views = require("../Views/index");
const Validation = require("../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Validation.chaeckProvince(),
  Validation.RenderProvince,
  Views.Province.CreateProvince
);
router.put(
  "/:Id",
  Validation.chaeckProvince(),
  Validation.RenderProvince,
  Views.Province.UpdateProvince
);
router.delete("/:Id", Views.Province.RemoveProvince);
router.get("/", Views.Province.AllProvince);
router.get("/:Id", Views.Province.GetProvince);

module.exports = router;
