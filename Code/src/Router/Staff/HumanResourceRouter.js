const Views = require("../../Views/index");

const express = require("express");
const router = express.Router();

router.post("/", Views.HumanResource.CreateHR);

module.exports = router;
