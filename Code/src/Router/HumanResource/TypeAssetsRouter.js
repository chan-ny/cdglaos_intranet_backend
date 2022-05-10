const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkTypelaw(),
  Valid.RenderTypelaw,
  Views.TypeLaw.CreateTypeLaw
);
router.put(
  "/:Id",
  Valid.checkTypelaw(),
  Valid.RenderTypelaw,
  Views.TypeLaw.UpdateTypeLaw
);
router.delete("/:Id", Views.TypeLaw.RemoveTypeLaw);
router.get("/", Views.TypeLaw.GetTypeLaw);

module.exports = router;
