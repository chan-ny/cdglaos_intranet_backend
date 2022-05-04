const Views = require("../Views/index");

const express = require("express");
const router = express.Router();

router.post("/gen", Views.Gender.createGender);
router.put("/up", Views.Gender.updateGender);
router.put("/dis/:Id", Views.Gender.disableGender);
router.get("/sel", Views.Gender.getGender);

module.exports = router;
