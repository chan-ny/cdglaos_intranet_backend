const Gender = require("./GendersView");
const Province = require("./ProvineView");
const District = require("./DistrictView");
const Company = require("./CompanyView");
const ChiefExecutiveOfficer = require("./CEOView");
const Users = require("./UserView");
const position = require("./Staff/PositionView");
const Employee = require("./Staff/EmployeeView");
const HumanResource = require("./Staff/HumanResourceView");
const Ability = require("./Staff/AbilityView");
const Bookfamily = require("./Staff/BookfamilyView");
const Bornlocation = require("./Staff/BornlocationView");
module.exports = {
  Bornlocation,
  Bookfamily,
  Ability,
  HumanResource,
  Gender,
  Province,
  District,
  Company,
  ChiefExecutiveOfficer,
  Users,
  position,
  Employee,
};
