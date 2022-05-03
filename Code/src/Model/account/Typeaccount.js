module.exports = (sequelize, DataTypes) => {
  const Typeaccount = sequelize.define("typeaccount", {
    tac_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    tac_name: DataTypes.STRING(150),
    tac_detail: DataTypes.TEXT,
    tac_status: DataTypes.STRING(15),
  });
  return Typeaccount;
};
