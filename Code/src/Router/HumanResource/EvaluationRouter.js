const Valid = require("../../validators/index");
const Views = require("../../Views/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkEvaluation(),
  Valid.RenderEvaluation,
  Views.Evaluation.CreateEvaluation
);
router.put(
  "/:Id",
  Valid.checkEvaluation(),
  Valid.RenderEvaluation,
  Views.Evaluation.UpdateEvaluation
);
router.delete("/:Id", Views.Evaluation.RemoveEvaluation);
router.get("/", Views.Evaluation.GetEvaluation);

module.exports = router;
