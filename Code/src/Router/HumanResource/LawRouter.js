const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post("/", Valid.checklaw(), Valid.Renderlaw, Views.Law.CreateLaw);
router.put("/:Id", Valid.checklaw(), Valid.Renderlaw, Views.Law.UpdateLaw);
router.delete("/:Id", Views.Law.RemoveLaw);
router.get("/", Views.Law.GetLaw)
module.exports = router;
