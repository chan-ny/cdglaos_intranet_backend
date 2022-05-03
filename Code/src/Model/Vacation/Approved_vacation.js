module.exports = (sequelize, DataTypes) => {
  const Approved_offday = sequelize.define(
    "Approved_vacation",
    {
      appd_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hr_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vacation_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      approved_on: DataTypes.STRING(60),
    },
    {
      updatedAt: false,
    }
  );
  return Approved_offday;
};
