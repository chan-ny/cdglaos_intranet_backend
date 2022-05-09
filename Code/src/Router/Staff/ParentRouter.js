const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkParent(),
  Valid.RenderParent,
  Views.Parent.CreateParent
);
router.put(
  "/:Id",
  Valid.checkParent(),
  Valid.RenderParent,
  Views.Parent.UpdateParent
);
router.delete("/:Id", Views.Parent.RemoveParent);
router.get("/", Views.Parent.GetParent);

module.exports = router;
