const Valid = require("../../validators/index");
const Views = require("../../Views/index");

const express = require("express");
const router = express.Router();
router.post(
  "/",
  Valid.checkType_Evaluation(),
  Valid.RenderType_Evaluation,
  Views.TypeEvaluation.CreateType_Evaluation
);
router.put(
  "/:Id",
  Valid.checkType_Evaluation(),
  Valid.RenderType_Evaluation,
  Views.TypeEvaluation.UpdateType_Evaluation
);
router.delete("/:Id", Views.TypeEvaluation.RemoveType_Evaluation);
router.get("/", Views.TypeEvaluation.GetType_Evaluation);
module.exports = router;
