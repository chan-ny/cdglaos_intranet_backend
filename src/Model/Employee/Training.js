module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("Training", {
    tn_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typetraining_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tn_content: DataTypes.TEXT,
    tn_image: DataTypes.STRING(255),
  });
  return Training;
};
