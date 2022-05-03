const Controller = require("./Controller/index");
const Validator = require("./validators/index");
const RequestandResponse = require("./Request_Response/index");

module.exports = (app) => {
  // User CTL
  app.post(
    "/regiter_user",
    Validator.CheckUser(),
    Validator.RedenUser,
    Controller.UserController.RegisterUser
  );
  app.post("/login_user", Controller.UserController.LoginUser);
  app.get(
    "/index_user",
    Controller.authentication.isAuthenUser,
    Controller.UserController.index
  );

  // Province CTL
  app.post(
    "/province",
    Validator.chaeckProvince(),
    Validator.RenderProvince,
    RequestandResponse.Province.CreateProvince
  );
  app.put(
    "/province",
    Validator.chaeckProvince(),
    Validator.RenderProvince,
    RequestandResponse.Province.UpdateProvince
  );
  app.delete("/province/:Id", RequestandResponse.Province.RemoveProvince);
  app.get("/province", RequestandResponse.Province.AllProvince);
  app.get("/pv_select/:Id", RequestandResponse.Province.GetProvince);

  // District CTL
  app.post(
    "/district",
    Validator.checkDistrict(),
    Validator.RenderDistrict,
    RequestandResponse.District.CreateDistrict
  );
  app.put(
    "/district",
    Validator.checkDistrict(),
    Validator.RenderDistrict,
    RequestandResponse.District.UpdateDistrict
  );
  app.get("/district", RequestandResponse.District.AllDistrict);
  app.get("/district/:Id", RequestandResponse.District.GetDistrict);

  //Type Training
  app.post(
    "/typetraining",
    Validator.checkTypeTraining(),
    Validator.RenderTypeTraining,
    Controller.TypeTrainigController.CreateTypeTraining
  );
  app.put(
    "/typetraining",
    Validator.checkTypeTraining(),
    Validator.RenderTypeTraining,
    Controller.TypeTrainigController.UpdateTypeTraining
  );
  app.delete(
    "/typetraining/:Id",
    Controller.TypeTrainigController.DeleteTypeTraining
  );
  app.get("/typetraining", Controller.TypeTrainigController.AllTypeTraining);
  app.get("/ttn_select", Controller.TypeTrainigController.SelectTypeTraining);

  //Type Employee
  app.post(
    "/typeemployee",
    Validator.checkTypeEmployee(),
    Validator.RenderTypeEmployee,
    Controller.TypeEmployeeController.CreateTypeEmployee
  );
  app.put(
    "/typeemployee",
    Validator.checkTypeEmployee(),
    Validator.RenderTypeEmployee,
    Controller.TypeEmployeeController.UpdateTypeEmployee
  );
  app.delete(
    "/typeemployee/:Id",
    Controller.TypeEmployeeController.DeleteTypeEmployee
  );
  app.get("/typeemployee", Controller.TypeEmployeeController.AllTypeEmployee);
  app.get("/temp_select", Controller.TypeEmployeeController.SelectTypeEmployee);

  //Employee
  app.post("/emp", Controller.EmployeeController.CreateEmployee);
  app.put("/emp/:Id", Controller.EmployeeController.UpdateEmployee);
  app.put("/emp_status/:Id", Controller.EmployeeController.StatusEmployee);
  app.put("/emp_off/:Id", Controller.EmployeeController.RemoveEmployee);
  app.get("/emp", Controller.EmployeeController.AllEmployee);
  app.get("/emp_select", Controller.EmployeeController.SelectEmployee);

  // Ability for Employee
  app.post(
    "/emp/ability",
    Validator.checkAbility(),
    Validator.RenderAbility,
    Controller.AbilityController.CreateAbility
  );
  app.put(
    "/emp/ability/:Id",
    Validator.checkAbility(),
    Validator.RenderAbility,
    Controller.AbilityController.UpdateAbility
  );
  app.delete("/emp/ability/:Id", Controller.AbilityController.RemoveAbility);
  app.get("/emp/ability", Controller.AbilityController.AllAbility);

  //Bookfimaly for employee
  app.post("/emp/bookfimaly", Controller.BookfimalyController.CreateBookfimaly);
  app.put(
    "/emp/rm_bookfimaly/:Id",
    Controller.BookfimalyController.RemoveImageBF
  );
  app.put(
    "/emp/add_bookfimaly/:Id",
    Controller.BookfimalyController.AddImageBF
  );
  app.put("/emp/up_bookfimaly/:Id", Controller.BookfimalyController.UpdateBF);
  app.get("/emp/bookfimaly", Controller.BookfimalyController.DisplayBookfimaly);

  //Born Location for employee
  app.post(
    "/emp/bornlocation",
    Validator.checkBornLocation(),
    Validator.RenderBornLocation,
    Controller.BornLocationController.CreateBl
  );
  app.put(
    "/emp/bornlocation/:Id",
    Validator.checkBornLocation(),
    Validator.RenderBornLocation,
    Controller.BornLocationController.UpdateBl
  );
  app.delete(
    "/emp/bornlocation/:Id",
    Controller.BornLocationController.DeleteBL
  );
  app.get("/emp/bornlocation", Controller.BornLocationController.DisplayBL);

  // Experience for employee
  app.post(
    "/emp/experience",
    Validator.checkExperience(),
    Validator.RenderExperience,
    Controller.ExperienceController.CreateExperience
  );
  app.put(
    "/emp/experience/:Id",
    Validator.checkExperience(),
    Validator.RenderExperience,
    Controller.ExperienceController.UpdateExperience
  );
  app.delete(
    "/emp/experience/:Id",
    Controller.ExperienceController.RemoveExperience
  );
  app.get("/emp/experience", Controller.ExperienceController.AllExperience);

  //High school for employee
  app.post(
    "/emp/highschool",
    Validator.CheckHighschool(),
    Validator.RenderHighschool,
    Controller.HigschoolController.CreateHighschool
  );
  app.put(
    "/emp/highschool/:Id",
    Validator.CheckHighschool(),
    Validator.RenderHighschool,
    Controller.HigschoolController.UpdateHighschool
  );
  app.delete(
    "/emp/highschool/:Id",
    Controller.HigschoolController.RemoveHighschool
  );
  app.get("/emp/highschool", Controller.HigschoolController.AllHighschool);

  // Husb and Wife for employee
  app.post(
    "/emp/hw",
    Validator.checkHW(),
    Validator.RenderHW,
    Controller.HusbandWifeController.CreateHusbandWife
  );
  app.put(
    "/emp/hw/:Id",
    Validator.checkHW(),
    Validator.RenderHW,
    Controller.HusbandWifeController.UpdateHusbandWife
  );
  app.delete("/emp/hw/:Id", Controller.HusbandWifeController.RemoveHusbandWife);
  app.get("/emp/hw/", Controller.HusbandWifeController.AllHusbandWife);

  // Indentity Card for Employee
  app.post(
    "/emp/indentittycard",
    Controller.IndentiyCardController.CreateIndentityCard
  );
  app.put(
    "/emp/upi_indentittycard/:Id",
    Controller.IndentiyCardController.UpdateImageIDTTC
  );
  app.put(
    "/emp/upt_indentittycard/:Id",
    Controller.IndentiyCardController.UpdateTextIndentityCard
  );
  app.delete(
    "/emp/indentittycard/:Id",
    Controller.IndentiyCardController.RemoveIndentityCard
  );
  app.get(
    "/emp/indentittycard",
    Controller.IndentiyCardController.DisplayIndentityCard
  );

  // Parent for employee
  app.post(
    "/emp/parent",
    Validator.checkParent(),
    Validator.RenderParent,
    Controller.ParentController.CreateParent
  );
  app.put(
    "/emp/parent/:Id",
    Validator.checkParent(),
    Validator.RenderParent,
    Controller.ParentController.UpdateParent
  );
  app.delete("/emp/parent/:Id", Controller.ParentController.RemoveParent);
  app.get("/emp/parent", Controller.ParentController.AllParent);

  // Study for employee
  app.post("/emp/study", Controller.StudyController.CreateStudy);
  app.put("/emp/upi_study/:Id", Controller.StudyController.UpdateImageStudent);
  app.put("/emp/upt_study/:Id", Controller.StudyController.UpdateTextStudy);
  app.delete("/emp/study/:Id", Controller.StudyController.RemoveStudy);
  app.get("/emp/study", Controller.StudyController.DisplayStudy);

  // Training for employee
  app.post("/emp/training", Controller.trainingController.CreateTraining);
  app.put(
    "/emp/upi_training/:Id",
    Controller.trainingController.UpdateImageTraining
  );
  app.put(
    "/emp/upt_training/:Id",
    Controller.trainingController.UpdateTextTraining
  );
  app.delete("/emp/training/:Id", Controller.trainingController.RemoveTraining);
  app.get("/emp/training", Controller.trainingController.DisplayTraining);

  // Gender
  app.post("/gender", RequestandResponse.Gender.createGender);
  app.put("/gender", RequestandResponse.Gender.updateGender);
  app.put("/disable_gender/:Id", RequestandResponse.Gender.disableGender);
  app.get("/gender", RequestandResponse.Gender.getGender);

  //company
  app.post("/company", RequestandResponse.Company.CreateCompany);
  app.put("/company_img/:Id", RequestandResponse.Company.UpdateCompanyImage);
  app.put("/company", RequestandResponse.Company.UpdateCompanyText);
  app.get("/company_disaable/:Id", RequestandResponse.Company.DisableCompany);
  app.put("/company_renew/:Id", RequestandResponse.Company.RenewCompany);

  //chief Executive Officer
  app.post("/ceo", RequestandResponse.ChiefExecutiveOfficer.CreateCEO);
};
