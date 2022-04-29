module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define(
    "Gender",
    {
      gd_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      gd_laoname: DataTypes.STRING(30),
      gd_engname: DataTypes.STRING(30),
      gd_status: DataTypes.STRING(15),
    },
    {
      timestamps: false,
    }
  );
  return Gender;
};
