const Views = require("../Views/index");

const express = require("express");
const router = express.Router();

router.post("/", Views.Gender.createGender);
router.put("/:Id", Views.Gender.updateGender);
router.put("/dis/:Id", Views.Gender.disableGender);
router.get("/:Id", Views.Gender.getGender);
router.get("/", Views.Gender.GenderAll);
router.delete("/:Id", Views.Gender.genderDelete);

module.exports = router;
