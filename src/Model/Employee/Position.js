module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define("position", {
    p_id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    p_Name: DataTypes.STRING(60),
    p_detail: DataTypes.TEXT,
    p_status: DataTypes.STRING(15),
  });
  return Position;
};
