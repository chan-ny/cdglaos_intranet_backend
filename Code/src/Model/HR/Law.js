module.exports = (sequelize, DataTypes) => {
  const Law = sequelize.define("Law", {
    lId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeLaw_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ltitle: DataTypes.STRING(150),
    lcontent: DataTypes.TEXT,
    lstatus: DataTypes.STRING(15),
  });
  return Law;
};
