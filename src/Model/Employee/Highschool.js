module.exports = (sequelize, DataTypes) => {
  const Highschool = sequelize.define("Highschool", {
    hs_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hs_name: DataTypes.STRING(150),
    hs_fromDate: DataTypes.DATE,
    hs_toDate: DataTypes.DATE,
  });
  return Highschool;
};
