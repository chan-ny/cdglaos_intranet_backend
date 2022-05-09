const Views = require("../../Views/index");
const Valid = require("../../validators/index");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  Valid.checkBookfamily(),
  Valid.RenderBookfamily,
  Views.Bookfamily.CreateBookfamily
);
router.put("/image/:Id", Views.Bookfamily.UpdateBookfamily_Image);
router.put(
  "/:Id",
  Valid.checkBookfamily(),
  Valid.RenderBookfamily,
  Views.Bookfamily.UpdateBookfamily
);
router.delete("/:Id", Views.Bookfamily.RemoveBookfamily);
router.get("/", Views.Bookfamily.GetBookfamily);

module.exports = router;
