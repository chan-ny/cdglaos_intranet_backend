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
const Experience = require("./Staff/ExperienceView");
const Highschool = require("./Staff/HighSchoolView");
const Husbandwife = require("./Staff/HusbandwifeView");
const Identitycard = require("./Staff/IdentityCardView");
const Parent = require("./Staff/ParentView");
const Study = require("./Staff/StudyView");
const TypeLaw = require("./HumanResource/TypelawView");
const Law = require("./HumanResource/LawView");
module.exports = {
  Law,
  TypeLaw,
  Study,
  Parent,
  Identitycard,
  Husbandwife,
  Highschool,
  Experience,
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
