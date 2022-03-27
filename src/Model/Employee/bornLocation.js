module.exports = (sequelize, DataTypes) => {
  const BornLocation = sequelize.define(
    "BornLocation",
    {
      bl_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      province_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      district_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bl_village: DataTypes.STRING(120),
    },
    {
      timestamps: false,
    }
  );
  return BornLocation;
};
