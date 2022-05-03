module.exports = (sequelize, DataTypes) => {
  const TypeTraining = sequelize.define("Type_Training", {
    ttn_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    ttn_name: DataTypes.STRING(150),
    ttn_detail: DataTypes.TEXT,
    ttn_status: DataTypes.STRING(15),
  });
  return TypeTraining;
};
