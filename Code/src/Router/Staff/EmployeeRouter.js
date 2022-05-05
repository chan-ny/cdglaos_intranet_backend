const Views = require("../../Views/index");
const Validation = require("../../validators/index");
const express = require("express");
const router = express.Router();

router.post(
  "/",
  Validation.checkStaff(),
  Validation.RenderStaff,
  Views.Employee.CreateEmployee
);
router.put("/modifyimag/:Id", Views.Employee.ModifyImage);
router.put("/change_img/:Id", Views.Employee.ChangeImage);
router.put(
  "/:Id",
  Validation.checkStaff(),
  Validation.RenderStaff,
  Views.Employee.UpdateEmployee
);
router.put("/inactive/:Id", Views.Employee.InactiveEmployee);
router.get("/", Views.Employee.AllEmployee);

module.exports = router;
