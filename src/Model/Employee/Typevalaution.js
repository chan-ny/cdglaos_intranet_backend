module.exports = (sequelize, DataTypes) => {
  const Typevaluation = sequelize.define("Type_Evalaution", {
    te_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    te_title: DataTypes.TEXT,
    te_status: DataTypes.STRING(15),
  });
  return Typevaluation;
};
