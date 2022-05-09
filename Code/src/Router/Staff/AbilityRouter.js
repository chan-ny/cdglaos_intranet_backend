const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkAbility(),
  Valid.RenderAbility,
  Views.Ability.CreateAbilty
);
router.put(
  "/:Id",
  Valid.checkAbility(),
  Valid.RenderAbility,
  Views.Ability.UpdateAbility
);
router.delete("/:Id", Views.Ability.RemoveAbility);
router.get("/:Id", Views.Ability.GetAbility);
router.get("/sel/:Id", Views.Ability.SelectAbility);

module.exports = router;
