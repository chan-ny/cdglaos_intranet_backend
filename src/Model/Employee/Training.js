module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("Training", {
    tn_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    typetraining_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    tn_content: DataTypes.TEXT,
    tn_image: DataTypes.STRING(255),
  });
  return Training;
};
