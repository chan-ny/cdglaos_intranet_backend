const Views = require("../../Views/index");
const Validation = require("../../validators/index");
const express = require("express");
const router = express.Router();

router.post(
  "/",
  Validation.checkPosition(),
  Validation.RenderPosition,
  Views.position.CreatePosition
);
router.put(
  "/:Id",
  Validation.checkPosition(),
  Validation.RenderPosition,
  Views.position.UpdatePosition
);
router.delete("/:Id", Views.position.RemovePositon);
router.get("/", Views.position.AllPosition);
router.get("/sel/:Id", Views.position.GetPosition);

module.exports = router;
