module.exports = (sequelize, DataTypes) => {
  const Study = sequelize.define("Study", {
    std_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    std_name: DataTypes.STRING(120),
    std_instilutional: DataTypes.STRING(150),
    std_faculty: DataTypes.STRING(150),
    std_major: DataTypes.STRING(150),
    std_Image: DataTypes.STRING(255),
    std_fromDate: DataTypes.DATE,
    std_toDate: DataTypes.DATE,
  });
  return Study;
};
