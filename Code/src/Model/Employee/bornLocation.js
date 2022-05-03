module.exports = (sequelize, DataTypes) => {
  const BornLocation = sequelize.define(
    "bornlocation",
    {
      bl_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      province_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      district_Id: {
        type: DataTypes.INTEGER(6),
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
