const Views = require("../../Views/index");
const Validation = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Validation.checkExperience(),
  Validation.RenderExperience,
  Views.Experience.CreateExperience
);
router.put(
  "/:Id",
  Validation.checkExperience(),
  Validation.RenderExperience,
  Views.Experience.UpdateExperience
);
router.delete("/:Id", Views.Experience.RemoveExperience);
router.get("/", Views.Experience.GetExperience);

module.exports = router;
