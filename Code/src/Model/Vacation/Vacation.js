module.exports = (sequelize, DataTypes) => {
  const Offday = sequelize.define("Vacation", {
    od_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    type_vacation_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    employee_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    od_title: DataTypes.STRING(200),
    od_content: DataTypes.TEXT,
    od_image: DataTypes.STRING(255),
    od_status: DataTypes.STRING(15),
  });
  return Offday;
};
