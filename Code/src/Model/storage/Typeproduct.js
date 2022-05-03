module.exports = (sequelize, DataTypes) => {
  const Typeproduct = sequelize.define("Type_Prodoct", {
    tpd_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrtement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tpd_name: DataTypes.STRING(150),
    tpd_status: DataTypes.STRING(15),
  });
  return Typeproduct;
};
