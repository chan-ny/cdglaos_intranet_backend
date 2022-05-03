const UserController = require("./UserController");
const authentication = require("../Helper/isAuthen");
const ProvinceController = require("./Province_C");
const TypeTrainigController = require("./TypeTrainingController");
const TypeEmployeeController = require("./Employee/TypeEmployeeController");
const EmployeeController = require("./Employee/EmployeeController");
const AbilityController = require("./Employee/AbilityController");
const BookfimalyController = require("./Employee/BookfimalyController");
const BornLocationController = require("./Employee/BornLocationController");
const ExperienceController = require("./Employee/ExperienceController");
const HigschoolController = require("./Employee/HigschoolController");
const HusbandWifeController = require("./Employee/HusbAndwifeController");
const ParentController = require("./Employee/ParentController");
const IndentiyCardController = require("./Employee/IndentityCardController");
const StudyController = require("./Employee/StudyController");
const trainingController = require("./Employee/TrainningController");
const GendersContriller = require("./Gender_C");
const DistrictController = require("./District_C");
const CompanyController = require("./Company_C");
const CEOcontroller = require("./CEOController");
module.exports = {
  UserController,
  authentication,
  ProvinceController,
  TypeTrainigController,
  TypeEmployeeController,
  EmployeeController,
  AbilityController,
  BookfimalyController,
  BornLocationController,
  ExperienceController,
  HigschoolController,
  HusbandWifeController,
  ParentController,
  IndentiyCardController,
  StudyController,
  trainingController,
  GendersContriller,
  DistrictController,
  CompanyController,
  CEOcontroller,
};
