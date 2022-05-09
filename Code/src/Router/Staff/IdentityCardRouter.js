const Views = require("../../Views/index");
const Validation = require("../../validators/index");

const express = require("express");
const router = express.Router();
router.post(
  "/",
  Validation.checkIdentityCard(),
  Validation.RenderIdentityCard,
  Views.Identitycard.CreateIdentityCard
);
router.put("/image/:Id", Views.Identitycard.UpdateImage);
router.put("/changeimage/:Id", Views.Identitycard.ChangeImage);
router.put(
  "/:Id",
  Validation.checkIdentityCard(),
  Validation.RenderIdentityCard,
  Views.Identitycard.UpdateIdentityCard
);
router.delete("/:Id", Views.Identitycard.RemoveIdentityCard);
router.get("/", Views.Identitycard.GetIdentitycard);

module.exports = router;
