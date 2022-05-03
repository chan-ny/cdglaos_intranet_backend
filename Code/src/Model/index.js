const Sequelize = require("sequelize");
const config_db = require("../config/config_db");
const db = {};

const sequelize = new Sequelize(
  config_db.DB,
  config_db.USER,
  config_db.PASSWORD,
  {
    host: config_db.HOST,
    port: config_db.PORT,
    dialect: config_db.dialect,
    operatorAliases: false,
    pool: {
      max: config_db.pool.max,
      min: config_db.pool.min,
      acquire: config_db.pool.acquire,
      idle: config_db.pool.idle,
    },
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Role = require("../Model/Role")(sequelize, Sequelize);
db.User = require("../Model/User")(sequelize, Sequelize);
db.Gender = require("../Model/Gender")(sequelize, Sequelize);
db.Position = require("./Employee/Position")(sequelize, Sequelize);
db.Province = require("./address/Province")(sequelize, Sequelize);
db.District = require("./address/District")(sequelize, Sequelize);
db.Employee = require("./Employee/Employee")(sequelize, Sequelize);
db.HusbandWife = require("./Employee/Husbandwife")(sequelize, Sequelize);
db.Experience = require("./Employee/Exprerience")(sequelize, Sequelize);
db.Parent = require("./Employee/Parent")(sequelize, Sequelize);
db.Study = require("./Employee/Study")(sequelize, Sequelize);
db.Ability = require("./Employee/Ability")(sequelize, Sequelize);
db.Highschool = require("./Employee/Highschool")(sequelize, Sequelize);
db.IdentityCard = require("./Employee/IdentityCard")(sequelize, Sequelize);
db.Bookfimary = require("./Employee/BookFimaly")(sequelize, Sequelize);
db.BornLocation = require("./Employee/bornLocation")(sequelize, Sequelize);
db.Menu = require("./menu/Menu")(sequelize, Sequelize);
db.Submenu = require("./menu/submenu")(sequelize, Sequelize);
db.SubmenuUser = require("./menu/Submenu_user")(sequelize, Sequelize);
db.TypeTraining = require("./trianing/TypeTraining")(sequelize, Sequelize);
db.Training = require("./trianing/Training")(sequelize, Sequelize);
db.Approved_training = require("./trianing/Approved_training")(
  sequelize,
  Sequelize
);
db.Typevacation = require("./Vacation/Typevacation")(sequelize, Sequelize);
db.Vacation = require("./Vacation/Vacation")(sequelize, Sequelize);
db.Approved_vacation = require("./Vacation/Approved_vacation")(
  sequelize,
  Sequelize
);
db.Customer = require("./Customer")(sequelize, Sequelize);
db.Typeassets = require("./assets/Typeassets")(sequelize, Sequelize);
db.Assets = require("./assets/Assets")(sequelize, Sequelize);
db.Typeaccount = require("./account/Typeaccount")(sequelize, Sequelize);
db.Account = require("./account/Account")(sequelize, Sequelize);
db.Evaluation = require("./Employee/Evalaution")(sequelize, Sequelize);
db.Typevaluation = require("./Employee/Typevalaution")(sequelize, Sequelize);
db.Company = require("./Company")(sequelize, Sequelize);
db.CEOS = require("./CEOS")(sequelize, Sequelize);
db.Policy = require("./Policy")(sequelize, Sequelize);
db.Welfare = require("./Welfare")(sequelize, Sequelize);
db.Typeproduct = require("./storage/Typeproduct")(sequelize, Sequelize);
db.Brands = require("./storage/Brands")(sequelize, Sequelize);
db.Typestorage = require("./storage/typestorage")(sequelize, Sequelize);
db.Storageproduct = require("./storage/Storageproduct")(sequelize, Sequelize);
db.Useproduct = require("./storage/useproduct")(sequelize, Sequelize);
db.HR = require("./HR")(sequelize, Sequelize);

// relationship
db.Role.hasMany(db.User, { foreignKey: "role_Id" });
db.Province.hasMany(db.District, { foreignKey: "province_Id" });

//Vacation
db.Typevacation.belongsTo(db.HR, { foreignKey: "hr_Id" });
db.Typevacation.hasMany(db.Vacation, { foreignKey: "type_vacation_Id" });
db.Vacation.belongsTo(db.Employee, { foreignKey: "employee_Id" });
db.Vacation.hasOne(db.Approved_vacation, { foreignKey: "vacation_Id" });
db.Approved_vacation.belongsTo(db.HR, { foreignKey: "hr_Id" });

//training
db.TypeTraining.hasMany(db.Training, { foreignKey: "typetraining_Id" });
db.Training.belongsTo(db.Employee, { foreignKey: "employee_Id" });
db.Training.hasOne(db.Approved_training, { foreignKey: "training_Id" });
db.Approved_training.belongsTo(db.HR, { foreignKey: "hr_Id" });

//assets
db.Typeassets.hasMany(db.Assets, { foreignKey: "typeassets_Id" });
db.Typeassets.belongsTo(db.HR, { foreignKey: "hr_Id" });
db.Assets.belongsTo(db.HR, { foreignKey: "hr_Id" });

//account
db.Typeaccount.belongsTo(db.Employee, { foreignKey: "employee_id" });
db.Typeaccount.hasMany(db.Account, { foreignKey: "typeaccount_Id" });
db.Account.belongsTo(db.Employee, { foreignKey: "employee_id" });

//evalaution
db.Typevaluation.belongsTo(db.HR, { foreignKey: "hr_Id" });
db.Typevaluation.hasMany(db.Evaluation, { foreignKey: "typevalaution_Id" });
db.Evaluation.belongsTo(db.Employee, { foreignKey: "employee_Id" });
db.Evaluation.belongsTo(db.HR, { foreignKey: "hr_Id" });

//ceo
db.Company.hasOne(db.CEOS, { foreignKey: "company_Id" });
db.CEOS.belongsTo(db.User, { foreignKey: "user_Id" });

//Humen resource
db.HR.hasMany(db.Policy, { foreignKey: "hr_Id" });
db.HR.hasMany(db.Welfare, { foreignKey: "hr_Id" });
db.HR.hasMany(db.Typeproduct, { foreignKey: "hr_Id" });
db.HR.hasMany(db.Brands, { foreignKey: "hr_Id" });
db.HR.hasMany(db.Typestorage, { foreignKey: "hr_Id" });

//production
db.Typeproduct.hasMany(db.Storageproduct, { foreignKey: "typeproduct_Id" });
db.Typestorage.hasMany(db.Storageproduct, { foreignKey: "typestoeage_Id" });
db.Brands.hasMany(db.Storageproduct, { foreignKey: "brands_Id" });
db.Storageproduct.belongsTo(db.Employee, { foreignKey: "employee_Id" });
db.Storageproduct.hasMany(db.Useproduct, { foreignKey: "storageproduct_Id" });
db.Useproduct.belongsTo(db.Employee, { foreignKey: "employee_Id" });
db.Useproduct.belongsTo(db.HR, { foreignKey: "hr_Id" });

//onther tb to hasMany tb employee
db.User.hasOne(db.Employee, { foreignKey: "user_Id" });
db.User.hasMany(db.SubmenuUser, { foreignKey: "user_Id" });
db.Menu.hasMany(db.Submenu, { foreignKey: "menu_Id" });
db.Submenu.hasMany(db.SubmenuUser, { foreignKey: "submenu_Id" });
db.Gender.hasMany(db.Employee, { foreignKey: "gender_Id" });
db.Position.hasMany(db.Employee, { foreignKey: "position_Id" });
db.Province.hasMany(db.Employee, { foreignKey: "province_Id" });
db.District.hasMany(db.Employee, { foreignKey: "district_Id" });
db.Province.hasOne(db.BornLocation, { foreignKey: "province_Id" });
db.District.hasOne(db.BornLocation, { foreignKey: "district_Id" });
//employee
db.Employee.hasOne(db.HusbandWife, { foreignKey: "employee_Id" });
db.Employee.hasMany(db.Experience, { foreignKey: "employee_Id" });
db.Employee.hasOne(db.Parent, { foreignKey: "employee_Id" });
db.Employee.hasMany(db.Study, { foreignKey: "employee_Id" });
db.Employee.hasMany(db.Training, { foreignKey: "employee_Id" });
db.Employee.hasMany(db.Ability, { foreignKey: "employee_Id" });
db.Employee.hasMany(db.Highschool, { foreignKey: "employee_Id" });
db.Employee.hasOne(db.IdentityCard, { foreignKey: "employee_Id" });
db.Employee.hasOne(db.Bookfimary, { foreignKey: "employee_Id" });
db.Employee.hasOne(db.BornLocation, { foreignKey: "employee_Id" });
db.Employee.hasMany(db.Customer, { foreignKey: "employee_Id" });

module.exports = db;
