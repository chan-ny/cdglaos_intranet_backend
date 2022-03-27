module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define("Province", {
    pv_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pv_laoName: DataTypes.STRING(100),
    pv_engName: DataTypes.STRING(100),
    pv_status: DataTypes.STRING(15),
  });
  return Province;
};
