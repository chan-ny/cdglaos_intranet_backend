const ProvinceController = require("./ProvinceController");
const GendersContriller = require("./GenderController");
const DistrictController = require("./DistrictController");
const CompanyController = require("./CompanyControoller");
const CEOcontroller = require("./CEOController");
const Usercontroller = require("./UserController");
const StaffController = require("./Staff/EmployeeController");
const PositionController = require("./Staff/PositionController");
const HumanResource = require("./Staff/HRController");
const HighSchoolController = require("./Staff/HighSchoolController");
const ParnetController = require("./Staff/ParentController");
const BookfamilyController = require("./Staff/BookfamilyController");
const BorlocationController = require("./Staff/bornlocationController");
const IdentitycardController = require("./Staff/IdentityCardController");
module.exports = {
  IdentitycardController,
  BorlocationController,
  BookfamilyController,
  ParnetController,
  HighSchoolController,
  ProvinceController,
  GendersContriller,
  DistrictController,
  CompanyController,
  CEOcontroller,
  Usercontroller,
  StaffController,
  PositionController,
  HumanResource,
};
