const Views = require("../../Views/index");
const Validation = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Validation.checkHW(),
  Validation.RenderHW,
  Views.Husbandwife.CreateHW
);
router.put(
  "/:Id",
  Validation.checkHW(),
  Validation.RenderHW,
  Views.Husbandwife.UpdateHW
);
router.delete("/:Id", Views.Husbandwife.RemoveHw);
router.get("/", Views.Husbandwife.GetHW);

module.exports = router;
