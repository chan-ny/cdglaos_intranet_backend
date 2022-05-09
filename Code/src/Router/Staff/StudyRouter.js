const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkStudy(),
  Valid.RenderStudy,
  Views.Study.CreateStudy
);
router.put("/imge/:Id", Views.Study.ModifyImage);
router.put("/changeimage/:Id", Views.Study.ChengeImage);
router.put(
  "/:Id",
  Valid.checkStudy(),
  Valid.RenderStudy,
  Views.Study.UpdateStudy
);
router.delete("/:Id", Views.Study.RemoveStudy);
router.get("/", Views.Study.GetStudy);

module.exports = router;
