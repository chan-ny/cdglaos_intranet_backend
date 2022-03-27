const Controller = require("./Controller/index");
const Validator = require("./validators/index");

module.exports = (app) => {
  // admin CTL
  app.post(
    "/regirter_admin",
    Validator.CheckAdmin(),
    Validator.RedenAdmin,
    Controller.AdminCTL.RegisterAdmin
  );
  app.post("/login_admin", Controller.AdminCTL.LoginAdmin);
  app.get(
    "/index_admin",
    Controller.authentication.isAuthenAdmin,
    Controller.AdminCTL.index
  );
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
    Controller.ProvinceController.CreateProvince
  );
  app.put(
    "/province",
    Validator.chaeckProvince(),
    Validator.RenderProvince,
    Controller.ProvinceController.UpdateProvince
  );
  app.delete("/province/:Id", Controller.ProvinceController.DeleteProvince);
  app.get("/province", Controller.ProvinceController.AllProvince);
  app.get("/pv_select", Controller.ProvinceController.SelectProvince);

  // District CTL
  app.post("/district", Validator.checkDistrict(), Validator.RenderDistrict);
  app.put("/district", Validator.checkDistrict(), Validator.RenderDistrict);

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
  app.put("/emp/bookfimaly/:Id", Controller.BookfimalyController.RemoveImageBF);
  app.put("/emp/add_bookfimaly/:Id", Controller.BookfimalyController.AddImageBF);


  //Born Location for employee
  app.post(
    "/emp/bornlocation",
    Validator.checkBornLocation(),
    Validator.RenderBornLocation
  );
  app.put(
    "/emp/bornlocation",
    Validator.checkBornLocation(),
    Validator.RenderBornLocation
  );

  // Experience for employee
  app.post(
    "/emp/experience",
    Validator.checkExperience(),
    Validator.RenderExperience
  );
  app.put(
    "/emp/experience",
    Validator.checkExperience(),
    Validator.RenderExperience
  );

  //High school for employee
  app.post(
    "/emp/highschool",
    Validator.CheckHighschool(),
    Validator.RenderHighschool
  );
  app.put(
    "/emp/highschool",
    Validator.CheckHighschool(),
    Validator.RenderHighschool
  );

  // Husb and Wife for employee
  app.post("/emp/hw", Validator.checkHW(), Validator.RenderHW);
  app.put("/emp/hw", Validator.checkHW(), Validator.RenderHW);

  // Indentity Card for Employee
  app.post(
    "/emp/indentittycard",
    Validator.checkIndentityCard(),
    Validator.RenderIndentityCard
  );
  app.put(
    "/emp/indentittycard",
    Validator.checkIndentityCard(),
    Validator.RenderIndentityCard
  );

  // Parent for employee
  app.post("/emp/parent", Validator.checkParent(), Validator.RenderParent);
  app.put("/emp/parent", Validator.checkParent(), Validator.RenderParent);

  // Study for employee
  app.post("/emp/study", Validator.checkStudy(), Validator.RenderStudy);

  // Training for employee
  app.post("/emp/training", Validator.checkTrainig(), Validator.RenderTraining);

  // Gender
  app.post("/gender", Controller.GenderController.CreateGender);
  app.put("/gender", Controller.GenderController.UpdateGender);
  app.delete("/gender/:Id", Controller.GenderController.DeleteGender);
  app.get("/gender", Controller.GenderController.AllGender);
  app.get("/gd_select", Controller.GenderController.SelectGender);
};
