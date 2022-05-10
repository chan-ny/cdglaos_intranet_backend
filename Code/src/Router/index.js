const express = require("express");
const router = express.Router();

router.use("/user", require("./UserRouter"));
router.use("/province", require("./ProvinceRouter"));
router.use("/district", require("./DistrictRouter"));
router.use("/gender", require("./GenderRouter"));
router.use("/company", require("./CompanyRouter"));
router.use("/ceo", require("./CEORouter"));
router.use("/position", require("./Staff/PositionRouter"));
router.use("/employee", require("./Staff/EmployeeRouter"));
router.use("/hr", require("./Staff/HumanResourceRouter"));
router.use("/ability", require("./Staff/AbilityRouter"));
router.use("/bookfamily", require("./Staff/BoofamilyRouter"));
router.use("/bornlocation", require("./Staff/BornlocationRouter"));
router.use("/experience", require("./Staff/ExperienceRouter"));
router.use("/highschool", require("./Staff/HighSchoolRouter"));
router.use("/husbandwife", require("./Staff/HusbandwifeRouter"));
router.use("/identitycard", require("./Staff/IdentityCardRouter"));
router.use("/parent", require("./Staff/ParentRouter"));
router.use("/study", require("./Staff/StudyRouter"));
router.use("/typelaw", require("./HumanResource/TypeAssetsRouter"));

module.exports = router;
