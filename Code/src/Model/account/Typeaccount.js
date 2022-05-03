module.exports = (sequelize, DataTypes) => {
  const Typeaccount = sequelize.define("typeaccount", {
    tac_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    tac_name: DataTypes.STRING(150),
    tac_detail: DataTypes.TEXT,
    tac_status: DataTypes.STRING(15),
  });
  return Typeaccount;
};
