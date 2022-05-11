const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post("/", Valid.checklaw(), Valid.Renderlaw, Views.Law.CreateLaw);
router.post("/:Id", Valid.checklaw(), Valid.Renderlaw, Views.Law.UpdateLaw);

module.exports = router;
