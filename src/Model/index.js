const Sequelize = require("sequelize");
const config_db = require("../Config/config_db");
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
db.Admin = require("../Model/Admin")(sequelize, Sequelize);
db.User = require("../Model/User")(sequelize, Sequelize);
db.Gender = require("../Model/Gender")(sequelize, Sequelize);
db.TypeEmployee = require("./Employee/TypeEmployee")(sequelize, Sequelize);
db.Province = require("../Model/Province")(sequelize, Sequelize);
db.District = require("../Model/District")(sequelize, Sequelize);
db.Employee = require("./Employee/Employee")(sequelize, Sequelize);
db.HusbandWife = require("./Employee/Husbandwife")(sequelize, Sequelize);
db.Experience = require("./Employee/Exprerience")(sequelize, Sequelize);
db.Parent = require("./Employee/Parent")(sequelize, Sequelize);
db.Study = require("./Employee/Study")(sequelize, Sequelize);
db.TypeTraining = require("./TypeTraining")(sequelize, Sequelize);
db.Training = require("./Employee/Training")(sequelize, Sequelize);
db.Ability = require("./Employee/Ability")(sequelize, Sequelize);
db.Highschool = require("./Employee/Highschool")(sequelize, Sequelize);
db.IndentityCard = require("./Employee/IndentityCard")(sequelize, Sequelize);
db.Bookfimary = require("./Employee/BookFimaly")(sequelize, Sequelize);
db.BornLocation = require("./Employee/bornLocation")(sequelize, Sequelize)

// relationship
// db.Role.hasMany(db.Admin, { foreignKey: 'role_Id' });
db.Role.hasMany(db.Admin, { foreignKey: "role_Id" });
db.Role.hasMany(db.User, { foreignKey: "role_Id" });
db.Province.hasMany(db.District, { foreignKey: "province_Id" });
db.TypeTraining.hasMany(db.Training, { foreignKey: "typetraining_Id" });
//onther tb to hasMany tb employee
db.User.hasOne(db.Employee, { foreignKey: "user_Id" });
db.Gender.hasMany(db.Employee, { foreignKey: "gender_Id" });
db.TypeEmployee.hasMany(db.Employee, { foreignKey: "typeEmployee_Id" });
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
db.Employee.hasOne(db.IndentityCard, { foreignKey: "employee_Id" });
db.Employee.hasOne(db.Bookfimary, { foreignKey: "employee_Id" });
db.Employee.hasOne(db.BornLocation, { foreignKey: "employee_Id"})

module.exports = db;
