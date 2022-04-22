module.exports = (sequelize, DataTypes) => {
  const Study = sequelize.define("Study", {
    std_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    std_name: DataTypes.STRING(120),
    std_instilutional: DataTypes.STRING(150),
    std_faculty: DataTypes.STRING(150),
    std_major: DataTypes.STRING(150),
    std_grade: DataTypes.STRING(12),
    std_Image: DataTypes.STRING(255),
    std_fromDate: DataTypes.DATE,
    std_toDate: DataTypes.DATE,
  });
  return Study;
};
