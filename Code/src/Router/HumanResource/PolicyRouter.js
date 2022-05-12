const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();
router.post(
  "/",
  Valid.checkPolicy(),
  Valid.RenderPolicy,
  Views.Policy.CreatePolicy
);
router.put(
  "/:Id",
  Valid.checkPolicy(),
  Valid.RenderPolicy,
  Views.Policy.UpdatePplicy
);
router.delete("/:Id", Views.Policy.RemovePolicy);
router.get("/", Views.Policy.GetPolicy);

module.exports = router;
