const Views = require("../../Views/index");
const Validation = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Validation.CheckHighschool(),
  Validation.RenderHighschool,
  Views.Highschool.CreateHS
);
router.put(
  "/:Id",
  Validation.CheckHighschool(),
  Validation.RenderHighschool,
  Views.Highschool.UpdateHS
);
router.delete("/:Id", Views.Highschool.RemoveHS);
router.get("/", Views.Highschool.GetHS);

module.exports = router;
