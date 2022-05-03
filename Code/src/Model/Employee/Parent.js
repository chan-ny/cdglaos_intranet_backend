module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define("Parent",
    {
      pr_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      pr_name: DataTypes.STRING(60),
      pr_age: DataTypes.STRING(6),
      pr_career: DataTypes.STRING(120),
      pr_detail: DataTypes.TEXT,
    },
    {
      timestamps: false,
    }
  );
  return Parent;
};
