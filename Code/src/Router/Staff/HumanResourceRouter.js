const Views = require("../../Views/index");

const express = require("express");
const router = express.Router();

router.post("/", Views.HumanResource.CreateHR);
router.get("/:Id", Views.HumanResource.GetHumanResource);

module.exports = router;
