const UserController = require("./UserController");
const authentication = require("../Helper/isAuthen");
const ProvinceController = require("./ProvinceController");
const TypeTrainigController = require("./TypeTrainingController");
const GenderController = require("./GenderController");
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

module.exports = {
  UserController,
  authentication,
  ProvinceController,
  TypeTrainigController,
  GenderController,
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
};
