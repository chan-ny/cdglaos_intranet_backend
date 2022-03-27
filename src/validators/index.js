const { CheckAdmin, RedenAdmin } = require("./registerAdmin");
const { CheckUser, RedenUser } = require("./registerUser");
const { chaeckProvince, RenderProvince } = require("./validProvince");
const { checkDistrict, RenderDistrict } = require("./validDistrict");
const {
  checkTypeTraining,
  RenderTypeTraining,
} = require("./validTypeTraining");
const {
  checkTypeEmployee,
  RenderTypeEmployee,
} = require("./validTypeEmployee");
const { checkAbility, RenderAbility } = require("./validAbility");
const {
  checkBornLocation,
  RenderBornLocation,
} = require("./validBornLocation");
const { checkExperience, RenderExperience } = require("./validExperience");
const { CheckHighschool, RenderHighschool } = require("./validHighschool");
const { checkHW, RenderHW } = require("./validHusbandwife");
const {
  checkIndentityCard,
  RenderIndentityCard,
} = require("./validIndentitycard");
const { checkParent, RenderParent } = require("./validParent");
const { checkStudy, RenderStudy } = require("./validStudy");
const { checkTrainig, RenderTraining } = require("./validTraining");
module.exports = {
  CheckAdmin,
  RedenAdmin,
  CheckUser,
  RedenUser,
  chaeckProvince,
  RenderProvince,
  checkDistrict,
  RenderDistrict,
  checkTypeTraining,
  RenderTypeTraining,
  checkTypeEmployee,
  RenderTypeEmployee,
  checkAbility,
  RenderAbility,
  checkBornLocation,
  RenderBornLocation,
  checkExperience,
  RenderExperience,
  CheckHighschool,
  RenderHighschool,
  checkHW,
  RenderHW,
  checkIndentityCard,
  RenderIndentityCard,
  checkParent,
  RenderParent,
  checkStudy,
  RenderStudy,
  checkTrainig,
  RenderTraining,
};
