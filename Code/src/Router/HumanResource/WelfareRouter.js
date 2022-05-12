const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();
router.post(
  "/",
  Valid.checkWelfare(),
  Valid.RenderWelfare,
  Views.Welfare.CreateWelfare
);
router.put(
  "/:Id",
  Valid.checkWelfare(),
  Valid.RenderWelfare,
  Views.Welfare.UpdateWelfare
);
router.delete("/:Id", Views.Welfare.RemoveWelfare);
router.get("/", Views.Welfare.GetWelfare);

module.exports = router;
