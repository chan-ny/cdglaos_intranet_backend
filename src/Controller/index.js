const AdminCTL = require("./AdminController");
const UserController = require("./UserController");
const authentication = require("../Helper/isAuthen");
const ProvinceController = require("./ProvinceController");
const TypeTrainigController = require("./TypeTrainingController");
const GenderController = require("./GenderController");
const TypeEmployeeController = require("./Employee/TypeEmployeeController");
const EmployeeController = require("./Employee/EmployeeController");
const AbilityController = require("./Employee/AbilityController");
const BookfimalyController = require("./Employee/BookfimalyController");

module.exports = {
  AdminCTL,
  UserController,
  authentication,
  ProvinceController,
  TypeTrainigController,
  GenderController,
  TypeEmployeeController,
  EmployeeController,
  AbilityController,
  BookfimalyController,
};
