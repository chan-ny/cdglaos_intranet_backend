const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();
router.post(
  "/",
  Valid.checkBornLocation(),
  Valid.RenderBornLocation,
  Views.Bornlocation.CreateBL
);
router.put(
  "/:Id",
  Valid.checkBornLocation(),
  Valid.RenderBornLocation,
  Views.Bornlocation.UpdateBL
);
router.delete("/:Id", Views.Bornlocation.RemoveBL);
router.get("/", Views.Bornlocation.GetBL);
module.exports = router;
