const express = require("express");
const router = express.Router();

router.use("/user", require("./UserRouter"));
router.use("/province", require("./ProvinceRouter"));
router.use("/district", require("./DistrictRouter"));
router.use("/gender", require("./GenderRouter"));
router.use("/company", require("./CompanyRouter"));
router.use("/ceo", require("./CEORouter"));

module.exports = router;
