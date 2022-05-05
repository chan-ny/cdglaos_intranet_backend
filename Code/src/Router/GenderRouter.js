const Views = require("../Views/index");

const express = require("express");
const router = express.Router();

router.post("/", Views.Gender.createGender);
router.put("/", Views.Gender.updateGender);
router.put("/dis/:Id", Views.Gender.disableGender);
router.get("/:Id", Views.Gender.getGender);

module.exports = router;
