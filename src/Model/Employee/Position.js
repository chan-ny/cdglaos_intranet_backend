module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define("Position", {
    p_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    p_Name: DataTypes.STRING(120),
    p_detail: DataTypes.TEXT,
    p_status: DataTypes.STRING(15),
  });
  return Position;
};
