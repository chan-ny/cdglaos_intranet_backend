module.exports = (sequelize, DataTypes) => {
  const Typeoffday = sequelize.define("Type_Vacation", {
    tod_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tod_name: DataTypes.STRING(150),
    tod_detail: DataTypes.TEXT,
    tod_status: DataTypes.STRING(15),
  });
  return Typeoffday;
};
