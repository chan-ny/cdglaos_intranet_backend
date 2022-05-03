const Views = require("../Views/index");
const Validator = require("../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/register",
  Validator.CheckUser(),
  Validator.RedenUser,
  Views.Users.RegisterUser
);
router.post("/login", Views.Users.Loginuser);
router.get("/display", Views.Users.DisplayUser);

module.exports = router;
