module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define(
    "Gender",
    {
      gd_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      gd_laoName: DataTypes.STRING(30),
      gd_engName: DataTypes.STRING(30),
      dg_status: DataTypes.STRING(15),
    },
    {
      timestamps: false,
    }
  );
  return Gender;
};
