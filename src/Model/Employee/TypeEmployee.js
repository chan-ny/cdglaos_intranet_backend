module.exports = (sequelize, DataTypes) => {
  const TypeEmployee = sequelize.define("TypeEmployee", {
    tepy_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tepy_Name: DataTypes.STRING(60),
    tepy_detail: DataTypes.TEXT,
    tepy_status: DataTypes.STRING(15),
  });
  return TypeEmployee;
};
