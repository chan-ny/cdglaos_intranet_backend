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
const { checkParent, RenderParent } = require("./validParent");
const { checkPosition, RenderPosition } = require("./PositionValid");
const { checkStaff, RenderStaff } = require("./EmployeeValid");
const { checkCompany, RenderCompany } = require("./CompanyValid");
const { checkCEO, RenderCEO } = require("./CEOValid");
const { checkBookfamily, RenderBookfamily } = require("./BookfamiltValid");
const {
  checkIdentityCard,
  RenderIdentityCard,
} = require("./IdentityCardValid");
const { checkStudy, RenderStudy } = require("./StudyValid");
const { checkTypelaw, RenderTypelaw } = require("./HR/TypeLawValid");
const { checklaw, Renderlaw } = require("./HR/LawValid");
module.exports = {
  checklaw,
  Renderlaw,
  checkTypelaw,
  RenderTypelaw,
  checkStudy,
  RenderStudy,
  checkIdentityCard,
  RenderIdentityCard,
  checkBookfamily,
  RenderBookfamily,
  checkCEO,
  RenderCEO,
  checkCompany,
  RenderCompany,
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
  checkParent,
  RenderParent,
  checkPosition,
  RenderPosition,
  checkStaff,
  RenderStaff,
};
