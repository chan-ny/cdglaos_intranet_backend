module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define(
    "Experience",
    {
      epr_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER(6),
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
