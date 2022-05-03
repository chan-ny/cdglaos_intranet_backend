module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    dt_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    province_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    dt_laoName: DataTypes.STRING(100),
    dt_engName: DataTypes.STRING(100),
    dt_status: DataTypes.STRING(15),
  });
  return District;
};
