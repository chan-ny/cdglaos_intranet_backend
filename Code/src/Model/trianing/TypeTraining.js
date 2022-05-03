module.exports = (sequelize, DataTypes) => {
  const TypeTraining = sequelize.define("Type_Training", {
    ttn_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ttn_name: DataTypes.STRING(150),
    ttn_detail: DataTypes.TEXT,
    ttn_status: DataTypes.STRING(15),
  });
  return TypeTraining;
};
