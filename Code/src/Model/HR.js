module.exports = (sequelize, DataTypes) => {
  const HR = sequelize.define(
    "Human_Resource",
    {
      hr_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      hr_status: DataTypes.STRING(15),
    },
    {
      timestamps: false,
    }
  );
  return HR;
};
