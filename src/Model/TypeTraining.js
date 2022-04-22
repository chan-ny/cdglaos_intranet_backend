module.exports = (sequelize, DataTypes) => {
  const TypeTraining = sequelize.define("TypeTraining", {
    ttn_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    ttn_name: DataTypes.STRING(255),
    ttn_detail: DataTypes.TEXT,
    ttn_status: DataTypes.STRING(15),
  });
  return TypeTraining;
};
