module.exports = (sequelize, DataTypes) => {
  const Evaluation = sequelize.define("Evaluation", {
    ev_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typevalaution_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ev_status: DataTypes.STRING(120),
    ev_content: DataTypes.TEXT,
    ev_fromDate: DataTypes.DATE,
    ev_endDate: DataTypes.DATE,
  });
  return Evaluation;
};
