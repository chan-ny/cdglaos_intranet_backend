module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define(
    "Experience",
    {
      epr_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autuIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      epr_companyName: DataTypes.STRING(120),
      epr_fromdate: DataTypes.DATE,
      epr_toDate: DataTypes.DATE,
      epr_position: DataTypes.STRING(120),
      epr_salary: DataTypes.STRING(12),
      epr_detail: DataTypes.TEXT,
    },
    {
      timestamps: false,
    }
  );
  return Experience;
};